
import { cloudinary } from '../../config/multer.config.js';

const uploadImage = async (file) => {

    const result =
        await cloudinary.uploader.upload(
            file,
            { folder: "products" }
        );

    return {
        url: result.secure_url,
        publicId: result.public_id
    };
};

export default uploadImage;