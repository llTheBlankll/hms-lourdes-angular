import {Component, OnInit} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {Badge} from 'primeng/badge';
import {Avatar} from 'primeng/avatar';
import {MenuItem} from 'primeng/api';
import {Ripple} from 'primeng/ripple';
import {InputText} from 'primeng/inputtext';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-top-menu',
  imports: [
    Menubar,
    Badge,
    Avatar,
    Ripple,
    InputText,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Storage',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
        ],
      },
    ];
  }
}
