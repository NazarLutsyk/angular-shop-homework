import {Component, OnInit, Optional} from '@angular/core';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {ConfigOptionsService} from '../../../core/services/config-options.service';
import {ConstantsService} from '../../../core/services/constants.service';
import {GeneratorService} from '../../../core/services/generator.service';
import {GeneratorFactoryService} from '../../../core/services/generator-factory.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configService: ConfigOptionsService,
    @Optional() private constantsService: ConstantsService,
    @Optional() private generatorService: GeneratorService,
    @Optional() private generatorFactoryService: GeneratorFactoryService
  ) {
  }

  ngOnInit() {
    console.log(this.localStorageService);

    this.configService.setSettings({x: 'y'});
    console.log(this.configService.getSettings());

    console.log(this.constantsService);

    console.log(this.generatorService.str);
  }

}
