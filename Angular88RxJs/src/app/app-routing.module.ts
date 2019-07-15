import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/01-intro/01-create/create.component';
import { DisposeProblemComponent } from './components/01-intro/02-dispose-problem/dispose-problem.component';
import { DisposeImplementationComponent } from './components/01-intro/03-dispose-implementation/dispose-implementation.component';
import { ErrorsComponent } from './components/01-intro/04-errors/errors.component';
import { ObservableVsPromiseComponent } from './components/01-intro/05-observable-vs-promise/observable-vs-promise.component';
import { CreateSampleComponent } from './components/02-create/01-create-sample/create-sample.component';
import { FromEventComponent } from './components/02-create/02-from-event/from-event.component';
import { ThrotteledBufferingComponent } from './components/03-observable-samples/01-throtteled-buffering/throtteled-buffering.component';
import { FlatMapVsMapComponent } from './components/03-observable-samples/02-flat-map-vs-map/flat-map-vs-map.component';
import { ToggleStreamComponent } from './components/03-observable-samples/03-toggle-stream/toggle-stream.component';
import { CatchComponent } from './components/03-observable-samples/04-catch/catch.component';
import { ColdObservableComponent } from './components/03-observable-samples/05-cold-observable/cold-observable.component';
import { HotObservableComponent } from './components/03-observable-samples/06-hot-observable/hot-observable.component';
import { HotObservableConnectComponent } from './components/03-observable-samples/07-hot-observable-connect/hot-observable-connect.component';
import { SubjectComponent } from './components/03-observable-samples/08-subject/subject.component';
import { BehaviorSubjectComponent } from './components/03-observable-samples/09-behavior-subject/behavior-subject.component';
import { HttpSampleComponent } from './components/03-observable-samples/10-http-sample/http-sample.component';
import { PostHttpSampleComponent } from './components/03-observable-samples/post-http-sample/post-http-sample.component';
import { MainCompComponent } from './components/04-service/main-comp/main-comp.component';

const routes: Routes = [
  { path: 'sample1', component: CreateComponent },
  { path: 'sample2', component: DisposeProblemComponent },
  { path: 'sample3', component: DisposeImplementationComponent },
  { path: 'sample4', component: ErrorsComponent },
  { path: 'sample5', component: ObservableVsPromiseComponent },
  { path: 'sample6', component: CreateSampleComponent },
  { path: 'sample7', component: FromEventComponent },
  { path: 'sample8', component: ThrotteledBufferingComponent },
  { path: 'sample9', component: FlatMapVsMapComponent },
  { path: 'sample10', component: ToggleStreamComponent },
  { path: 'sample11', component: CatchComponent },
  { path: 'sample12', component: ColdObservableComponent },
  { path: 'sample13', component: HotObservableComponent },
  { path: 'sample14', component: HotObservableConnectComponent },
  { path: 'sample15', component: SubjectComponent },
  { path: 'sample16', component: BehaviorSubjectComponent },
  { path: 'sample17', component: HttpSampleComponent },
  { path: 'sample171', component: PostHttpSampleComponent },
  { path: 'sample18', component: MainCompComponent }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
