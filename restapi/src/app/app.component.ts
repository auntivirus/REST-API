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

        To generate service file: ng g service service_name

Dependency Injection:
        It is a part of the Angular Framework that provides components with access to services and other resources.
        
        Angular provides the ability to inject a service into component to give that component access to the service.

@Injectable
        Defines a class as a service in Angular and allows Angular to inject into a component as a dependency.

HttpClient:
        It is a built-in service class available in the '@angular/common/http' package. It has multiple signatures and return types for each requests. It uses 'RxJS' observable REST api which means it returns the observable and what we need to subscribe it. This API was developed based on XML/HTTP request interface exposed by browsers.

        Features of HttpClient:
                i. It provides type request & response objects.
                ii. It contains testability features.
                iii. It intercepts request & response.
                iv. It supports RxJS observable based APIs.
                v. It also supports streamlined error handling.
                vi It performs GET, POST, PUT, DELETE operations.
RxJS Observable:
        This observable is a unique object and is similar to 'Promise' and helps to manage asynchronous code. For this, we need the most popular observable library which is RxJS (Reactive Extensions for JavaScript).

        HTTP GET Request:
                It returns a fetch of the data. 
                Syntax: this.http.get(url);
        HTTP POST Request:
                It is used to send data from the application to the server.
                Syntax: this.http.post(url,data);
        HTTP DELETE Request:
                It is used to delete based on the parameter.
                Syntax: this.http.delete(url+id);
        HTTP PUT Request:
                It is used to update the data based on the parameter.
                Syntax: this.http.put(url+id,data);
        
Subscribe Method:
        This method calls the observables that produces and emits data. Thus suscribing to an observable starts a flow of data between observable and observer.

Command to start JSON Server - json-server filename
*/
