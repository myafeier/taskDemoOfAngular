import { Component, OnInit } from '@angular/core';
import { getDate } from "date-fns";
// 小彩蛋：随时间变化的icon,主要是看如何引入一个js的类
// 1.安装时间类:npm install --save date-fns
// 2.安装types: npm install --save @types/date-fns
// 3.导入：import { getDate } from "date-fns";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  today='day';
  constructor() { }

  ngOnInit() {
    // 4.逻辑
    this.today=`day${getDate(new Date())}`;
    console.log(this.today)
  }

}
