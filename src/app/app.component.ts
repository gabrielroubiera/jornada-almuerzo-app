import { Component, OnInit } from '@angular/core';
import Echo from 'laravel-echo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jornada-almuerzo-app';

  ngOnInit(): void {
    this.webSockets();
  }

  webSockets(){
    const echo = new Echo({
      broadcaster: 'pusher',
      cluster: 'mt1',
      key: 'ASD1234GH',
      wsHost: '147.182.141.55',
      wsPort: 6001,
      wssPort: 6001,
      forceTLS: false,
      disableStats: true,
      enabledTransports: ['ws']
    });

    echo.channel('channel-message')
      .listen('MessageEvent' , (res: any) => {
        window.location.reload();
      });
  }
}
