import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategoryRepo } from "../../interfaces";

export async function find(id: number)/*: Promise<RealEstate[]> */{
    const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);

    const results = categoryRepository.findOne({
        where: {
            id
        },
        relations: {
            realEstate: true
        }
    });

    //Talvez ter de fazer uma validação aqui

    return results;
}