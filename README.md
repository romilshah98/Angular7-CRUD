# Angular7 CRUD
 CRUD implimented in Angular7

Step1: Create the EmployeeDatabase in SQL Server. Create Employee table with fields EmployeeID(Primary key, auto increment), FullName, EmpCode, Mobile and Position.

Step2: Open Visual Studio > new > project > Web > ASP .NET Web Application(Name it as WebApi) > click ok and select Web Api

Step3: Add entity model; Right click on model > add new item > Data > ADO.NET Entity Data Model name DBModels click add > EF Designer from Database > Provide Server Name and select your database then click ok > create DBModels class click next > select Entity Framework version > Check Tables and Finish. There will  be an Employee.cs class, which has properties corresponding to columns of table. Now rebuild solution

Step4: Add new controller > Select model class(Employee) and Data content class and give name EmployeController.

Step5: To allow cross origin run this command in visual studio > tools > NuGet Package Manager > Package Manager Console and write this command
>> Install-Package Microsoft.AspNet.WebApi.Cors 

Step6: Go to app_start  > webapi.cs 
>> In this file in register function write config.EnableCors(new EnableCorsAttribute("http://localhost:4200",headers="*",methods="*"))

### now we have our web api setup. So, you can clone my project and it is ready to use.