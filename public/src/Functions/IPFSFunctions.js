import axios from 'axios';

export async function sendFileToIPFS(file) {
    if (file) {
        try {
            const formData = new FormData();
            formData.append("file", file);
            // console.log("formData"+formData.get(file))
            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                    'pinata_secret_api_key':  `${process.env.REACT_APP_PINATA_API_SECRET}`,
                    "Content-Type": "multipart/form-data"
                },
            });
            // console.log("https://ipfs.io/ipfs/" + resFile.data.IpfsHash)
            return resFile.data.IpfsHash
        } catch (error) {
            console.log("Error sending File to IPFS: " + error)
        }
    }
}