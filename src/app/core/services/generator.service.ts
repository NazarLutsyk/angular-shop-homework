import {Injectable} from '@angular/core';
import {GeneratorFactoryService} from './generator-factory.service';

function generatorFactoryService(length: number = 0) {
  return (factory: GeneratorFactoryService) => {
    // I use it here instead of using it in Generator Factory Service because then i get cyclic imports
    return new GeneratorService(factory.generate(length));
  };
}

@Injectable({
  providedIn: 'root',
  useFactory: generatorFactoryService(20),
  deps: [GeneratorFactoryService]
})
export class GeneratorService {

  str: string;

  constructor(str) {
    this.str = str;
  }
}
