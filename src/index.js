import sharp from 'sharp';
var prompt = require('prompt-sync')();

const roundedCorners = Buffer.from(
    '<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'
);

async function getMetadata() {
    try {
        await sharp(`./images/sammy.png`)
            .resize({
                width: 200,
                height: 200
            })
            .composite([{
                input: roundedCorners,
                blend: 'dest-in',
            }])
            .toFile(`./images/sammy-resized.png`);
    } catch (error) {
        console.log(`An error occurred during processing: ${error}`);
    }
}

getMetadata().then(() => console.log("done!"));