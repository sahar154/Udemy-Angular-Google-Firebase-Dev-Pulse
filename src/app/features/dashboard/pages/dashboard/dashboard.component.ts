import { Component, computed, inject } from '@angular/core';
import { DashboardStaticticsComponent } from '../../components/dashboard-statictics/dashboard-statictics.component';
import { BlogpostService } from '../../../post/services/blogpost.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Timestamp } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogPostHelper } from '../../../../core/helpers/blogpost-helper';

@Component({
    selector: 'app-dashboard',
    imports: [DashboardStaticticsComponent, DatePipe, RouterLink],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  blogPostService = inject(BlogpostService);

  blogPosts = toSignal(this.blogPostService.getBlogPostsByUser());

  totalBlogPosts = computed(() => {
    return this.blogPosts()?.length
  })

  convertTimestampToDate = BlogPostHelper.convertTimestampToDate;
}
