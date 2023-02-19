import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restapi';
}
/* 
REST API:
        REST API also known as RESTful API. It is an Application Programming Interface (API) that conforms to the constraints of REST Architectural style and allows for interaction with RESTful Web Services.
        REST stands for REpresentational State Transfer and it was created by Roy Fielding.

        API is a set of definitions and protocols for building and integrating application software. Basically, it is a contract between information provider and information user.

        So, API as a mediator between users and resources. When a client request is made via a RESTful API, it transfers a representation of the state of the resources to the requester. This information is delivered in one of the several formats via HTTP like JSON, HTML, Python, PHP, Plain text and JSON is the most generally file format.

Services:
        A service is a broad category encompasing any value, function or features that application needs. It is typically a class with a narrow, well-defined purpose.
        
        A component should use services for tasks that don't involve the application logic. So, services are good for tasks such as fetching data from the server, validating user input.

        By defining such processing task in Injectable service class, you make those task available to any component. You can also make your applicaion more adaptable by injecting different providers of the same kind of service.

Dependency Injection:
        It is a part of the Angular Framework that provides components with access to services and other resources.
        Angular provides the ability to inject a service into component to give that component access to the service.

@Injectable
        Defines a class as a service in Angular and allows Angular to inject into a component as a dependency.

*/
