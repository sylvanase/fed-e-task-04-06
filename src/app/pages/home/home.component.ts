import { Component, OnInit } from '@angular/core';

interface List {
  name: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor() { }
  

  list: List[] = [
    { name: "张三"},
    { name: "李四", },
    { name: "王五", },
    { name: "赵六",}
  ]
  
  ngOnInit(): void {
  }

  // 删除联系方式
  removeContact(i: number) {
    this.list.splice(i, 1)
  }

  onSubmit(input: HTMLInputElement) {
    this.list.push({name: input.value})
    input.value = ""
  }

}
