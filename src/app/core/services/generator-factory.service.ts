import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorFactoryService {

  generate(length: number = 0) {
    const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerLetters = upperLetters.toLocaleLowerCase();
    const nums = '0123456789';

    const symbols = upperLetters + lowerLetters + nums;

    let resultStr = '';
    for (let i = 0; i < length; i++) {
      resultStr += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return resultStr;
  }
}
