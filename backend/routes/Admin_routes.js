const express = require('express');
const Aboutmodel = require('../models/about'); // Import the model
const upload = require('../multerConfig');
const router = express.Router();

router.route('/change').post(upload.single('image'), async (req, res) => {
    try {
        console.log("Received Request Body:", req.body);
        console.log("Received File:", req.file);
        
        const { job_heading, about_text, experiences, action, imageTitle, imageDescription, imagePosition } = req.body;
        const imageFile = req.file;

        console.log(experiences);

        const latestData = await Aboutmodel.findOne().sort({ _id: -1 });

        if (!latestData) {
            console.log("No data found in the database.");
            return res.status(404).json({ success: false, message: 'No data found' });
        }

        let current_job_heading = latestData.job_heading;
        let current_about_text = latestData.about_text;
        let current_time_line = [...latestData.time_line];
        let updatedImages = {
            image1: latestData.image1,
            image2: latestData.image2,
            image3: latestData.image3
        };

        if (
            typeof job_heading === "string" && 
            job_heading.trim() !== "" && 
            job_heading !== current_job_heading
        ) {
            current_job_heading = job_heading;
        }

        if (
            typeof about_text === "string" && 
            about_text.trim() !== "" && 
            about_text !== current_about_text
        ) {
            current_about_text = about_text;
        }

        if (typeof experiences === "object" && experiences !== null) {
            if (action === "edit") {
                const index = parseInt(experiences.position) - 1;
                
                if (!isNaN(index) && index >= 0 && index < current_time_line.length) {
                    current_time_line[index] = [
                        experiences.year,
                        experiences.title,
                        experiences.duration,
                        experiences.details
                    ];
                } else {
                    console.log("Invalid index for editing:", index);
                }
            } else if (action === "add") {
                current_time_line.push([
                    experiences.year,
                    experiences.title,
                    experiences.duration,
                    experiences.details
                ]);
            }
        }

        if (imageFile) {
            let assigned = false;
            const imageKey = `image${imagePosition}`;

            if (updatedImages.hasOwnProperty(imageKey) && updatedImages[imageKey] && updatedImages[imageKey].url) {
                updatedImages[imageKey] = {
                    url: imageFile.path,
                    title: imageTitle || "",
                    description: imageDescription || ""
                };
                assigned = true;
            }
            
            if (!assigned) {
                for (let i = 1; i <= 3; i++) {
                    const key = `image${i}`;
                    if (!updatedImages[key] || !updatedImages[key].url) {
                        updatedImages[key] = {
                            url: imageFile.path,
                            title: imageTitle || "",
                            description: imageDescription || ""
                        };
                        break;
                    }
                }
            }
        }

        const newEntry = new Aboutmodel({
            job_heading: current_job_heading,
            about_text: current_about_text,
            time_line: current_time_line,
            image1: updatedImages.image1,
            image2: updatedImages.image2,
            image3: updatedImages.image3
        });

        await newEntry.save();

        res.status(200).json({ success: true, message: 'Data processed and saved successfully' });

    } catch (err) {
        console.error("Error processing data:", err);
        res.status(500).json({ success: false, message: 'Unable to process data' });
    }
});
module.exports = router;
