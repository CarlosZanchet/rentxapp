import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

  
class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
 
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, { name, description, create_at: new Date() });
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    return this.specifications.find(e => e.name === name);
  }
}

export { SpecificationRepository };