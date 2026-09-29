import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound implements OnDestroy {

  countdown = 10;
  isDarkMode = true;
  redirectCancelled = false;

  private countdownTimer?: ReturnType<typeof setInterval>;

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.startCountdown();
  }

  private startCountdown(): void {
    this.countdownTimer = setInterval(() => {

      if (this.redirectCancelled) {
        return;
      }

      this.countdown--;

      if (this.countdown <= 0) {
        this.goHome();
      }

    }, 1000);
  }

  goHome(): void {
    this.clearTimer();
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.clearTimer();
    this.location.back();
  }

  stayHere(): void {
    this.redirectCancelled = true;
    this.clearTimer();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
  }

  private clearTimer(): void {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = undefined;
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }
}