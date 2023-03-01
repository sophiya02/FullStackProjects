import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { LayoutBreakpoints } from 'resources/shared.resources';
import {Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Authentication';
  subs = new Subscription()

  get isDesktopScreen() : boolean {
    return this.breakPointObserver.isMatched([LayoutBreakpoints.DESKTOP])
  }

  get isLargeDesktopScreen() : boolean {
    return this.breakPointObserver.isMatched([LayoutBreakpoints.LARGE_DESKTOP])
  }

  get isMobileScreen() : boolean {
    return this.breakPointObserver.isMatched([LayoutBreakpoints.MOBILE])
  }

  get isTabScreen() : boolean {
    return this.breakPointObserver.isMatched([LayoutBreakpoints.TAB])
  }

  constructor(private breakPointObserver: BreakpointObserver,
              private cd: ChangeDetectorRef
    ){}

  ngAfterViewInit(){
    const subs1 = this.breakPointObserver.observe([
      LayoutBreakpoints.DESKTOP,
      LayoutBreakpoints.LARGE_DESKTOP,
      LayoutBreakpoints.TAB,
      LayoutBreakpoints.MOBILE,
    ]).subscribe(()=> this.cd.markForCheck());

    this.subs.add(subs1);
  }
  
}
