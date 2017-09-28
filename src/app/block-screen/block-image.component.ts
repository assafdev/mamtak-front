import {Component, Input} from '@angular/core';
import {Picture} from "./Picture";
import {Config} from "../config/config.service";

@Component({
   selector: 'app-block-img',
   templateUrl: '../block-screen/block-image.component.html',
})

export class BlockImageComponent {
  @Input() Pic: Config
 Time = Config.BLOCK_PICTURE.Time
 PicName=""
 Name = Config.BLOCK_PICTURE.Name

 fileChange(event) {
   let fileList: FileList = event.target.files;
   let file: File = fileList[0];
   this.PicName = file.name
   Config.BLOCK_PICTURE.Name = file.name
   this.Name = Config.BLOCK_PICTURE.Name
   if (fileList.length > 0) {
   }
  this.Time =  Date.now()
   Config.BLOCK_PICTURE.Time = Date.now()
   this.Time = Config.BLOCK_PICTURE.Time
 }


}
