
import Category from "../models/category.model.js";
import Unit from "../models/unit.model.js";

export const seedBasicData = async () => {
    try {
        const units = [
            { name: "Unidad", abbreviation: "ud" },
            { name: "Kilogramo", abbreviation: "kg" },
            { name: "Litro", abbreviation: "l" },
            { name: "Caja", abbreviation: "cj" }
        ];

        const categories = [
            { name: "General" }
        ];

        await Unit.insertMany(units);
        await Category.insertMany(categories);

        console.log("Datos básicos insertados");
    } catch (error) {
        console.error(error);
    }
};