
import User from "../../models/user.model.js";

export const seedAdmin = async () => {
    try {
        const existingAdmin = await User.findOne({
           email: "admin@admin.com"
        });

        if (existingAdmin) {
            console.log("Admin ya existe");
            return;
        }

        const admin = new User({
            name: "Administrador",

            email: "admin@admin.com",

            password: '123456',

            role: "admin"
        });

        await admin.save();

        console.log("Admin creado:");
        console.log("Email: admin@admin.com");
        console.log("Password: admin123");

    } catch (error) {
        console.error(error);
    }
};