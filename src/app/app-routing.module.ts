import { StudentActivitiesComponent } from './student-activities/student-activities.component';
import { PathGuard } from './path.guard';
import { SinglemoviesComponent } from './singlemovies/singlemovies.component';
import { LogoutComponent } from './logout/logout.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NetworkComponent } from './network/network.component';
import { PepoleComponent } from './pepole/pepole.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './Show-Courses/Show-Courses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ResultComponent } from './result/result.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { StuLevel1Component } from './stu-level1/stu-level1.component';
import { StuLevel2Component } from './stu-level2/stu-level2.component';
import { StuLevel3Component } from './stu-level3/stu-level3.component';
import { StuLevel4Component } from './stu-level4/stu-level4.component';
import { SettingComponent } from './setting/setting.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseListComponent } from './add-course-list/add-course-list.component';
import { AddCourseList2Component } from './add-course-list2/add-course-list2.component';
import { AddCourseList3Component } from './add-course-list3/add-course-list3.component';
import { AddCourseList4Component } from './add-course-list4/add-course-list4.component';
import { InfoComponent } from './info/info.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ScientificReferenceComponent } from './scientific-reference/scientific-reference.component';
import { ShowReferenceComponent } from './show-reference/show-reference.component';

const routes: Routes = [
  {path:'',redirectTo:'setting',pathMatch:'full'},
  {path:'setting', canActivate:[PathGuard],component:SettingComponent},
  {path:'home', canActivate:[PathGuard],component:HomeComponent},
  {path:'show-courses', canActivate:[PathGuard],component:AboutComponent},
  {path:'movies', canActivate:[PathGuard],component:MoviesComponent},
  {path:'addStu', canActivate:[PathGuard],component:AddStudentComponent},
  {path:'addCourseLev1', canActivate:[PathGuard],component:AddCourseListComponent},
  {path:'addCourseLev2', canActivate:[PathGuard],component:AddCourseList2Component},
  {path:'addCourseLev3', canActivate:[PathGuard],component:AddCourseList3Component},
  {path:'addCourseLev4', canActivate:[PathGuard],component:AddCourseList4Component},
  {path:'singlemovies/:id/:name', canActivate:[PathGuard],component:SinglemoviesComponent},
  {path:'updateCourse/:id', canActivate:[PathGuard],component:UpdateCourseComponent},
  {path:'Result/:userName/:id', canActivate:[PathGuard],component:ResultComponent},
  {path:'ShowResult/:userName/:id', canActivate:[PathGuard],component:ShowResultComponent},
  {path:'updateResult/:id', canActivate:[PathGuard],component:UpdateResultComponent},
  {path:'allStudent', canActivate:[PathGuard],component:TvshowComponent},
  {path:'StudentLevel1', canActivate:[PathGuard],component:StuLevel1Component},
  {path:'StudentLevel2', canActivate:[PathGuard],component:StuLevel2Component},
  {path:'StudentLevel3', canActivate:[PathGuard],component:StuLevel3Component},
  {path:'StudentLevel4', canActivate:[PathGuard],component:StuLevel4Component},
  {path:'pepole', canActivate:[PathGuard],component:PepoleComponent},
  {path:'network', canActivate:[PathGuard],component:NetworkComponent},
  {path:'complaints', canActivate:[PathGuard],component:ComplaintsComponent},
  {path:'ScientificReference', canActivate:[PathGuard],component:ScientificReferenceComponent},
  {path:'ShowScientificReference', canActivate:[PathGuard],component:ShowReferenceComponent},
  {path:'studentActivities', canActivate:[PathGuard],component:StudentActivitiesComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'info', canActivate:[PathGuard],component:InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
