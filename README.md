# nodejs-mini-projects

Node.js mini-projects, each one a new challenge.

<p align="center"><img src="https://fabiankaraben.github.io/mini-projects/imgs/nodejs.webp" alt="Featured Image"></p>

## Basic

1. **Hello World HTTP Server**  
   🔹 This is a simple HTTP server in Node.js with TypeScript, serving a "Hello World" response on a single endpoint, no database, basic GET request handling, no security, and Docker deployment for local testing.  
   🔹 **Project directory**: basic/01-hello-world-http-server

2. **Static File Server**  
   🔹 This is a basic static file server in Node.js with TypeScript, serving HTML/CSS/JS files from a directory, using built-in HTTP module, no database, simple file routing, no security, and Docker deployment for serving assets.  
   🔹 **Project directory**: basic/02-static-file-server

3. **JSON Response API**  
   🔹 This is a minimal API in Node.js with Express and TypeScript, returning JSON data on GET requests, in-memory data storage, one endpoint, no security, and Docker deployment for quick prototyping.  
   🔹 **Project directory**: basic/03-json-response-api

4. **Form Data Parser**  
   🔹 This is a form handling service in Node.js with TypeScript, parsing POST form data, using body-parser middleware, no database, echo response endpoint, no security, and Docker deployment for input validation practice.  
   🔹 **Project directory**: basic/04-form-data-parser

5. **Environment Variables Config**  
   🔹 This is a configuration service in Node.js with TypeScript, loading env vars for app settings, using dotenv, no database, GET endpoint to display config, no security, and Docker deployment with env injection.  
   🔹 **Project directory**: basic/05-environment-variables-config

6. **Basic Logging Service**  
   🔹 This is a logging-enabled server in Node.js with TypeScript, logging requests to console, using Express, no database, multiple endpoints, no security, and Docker deployment for log monitoring.  
   🔹 **Project directory**: basic/06-basic-logging-service

7. **Error Handling API**  
   🔹 This is an error management API in Node.js with Express and TypeScript, handling 404/500 errors gracefully, no database, test endpoints for errors, no security, and Docker deployment for robustness testing.  
   🔹 **Project directory**: basic/07-error-handling-api

8. **CORS Enabled Server**  
   🔹 This is a CORS-configured backend in Node.js with TypeScript, allowing cross-origin requests, using Express middleware, no database, simple API endpoints, no security, and Docker deployment for frontend integration.  
   🔹 **Project directory**: basic/08-cors-enabled-server

9. **Rate Limiting Service**  
   🔹 This is a rate-limited API in Node.js with Express and TypeScript, limiting requests per IP, using express-rate-limit, no database, basic endpoints, no security, and Docker deployment for abuse prevention practice.  
   🔹 **Project directory**: basic/09-rate-limiting-service

10. **SQLite CRUD API**  
    🔹 This is a CRUD backend in Node.js with TypeScript, using SQLite for data persistence, Express for REST APIs with 4 endpoints, no security, and Docker Compose deployment for lightweight database operations.  
    🔹 **Project directory**: basic/10-sqlite-crud-api

11. **MongoDB Connection Service**  
    🔹 This is a database connector in Node.js with TypeScript, connecting to MongoDB, using Mongoose, insert/query operations, no APIs, no security, and Docker Compose deployment for DB setup practice.  
    🔹 **Project directory**: basic/11-mongodb-connection-service

12. **File Upload Handler**  
    🔹 This is a file upload service in Node.js with TypeScript, handling multipart uploads, using Multer, store files locally, POST endpoint, no security, and Docker deployment for media handling.  
    🔹 **Project directory**: basic/12-file-upload-handler

13. **Email Sender API**  
    🔹 This is an email dispatching backend in Node.js with TypeScript, sending emails via Nodemailer, SMTP config, one endpoint, no security, and Docker deployment for notification practice.  
    🔹 **Project directory**: basic/13-email-sender-api

14. **Basic Authentication API**  
    🔹 This is an auth service in Node.js with Express and TypeScript, using basic HTTP auth, in-memory users, protected endpoints, no database, and Docker deployment for simple security.  
    🔹 **Project directory**: basic/14-basic-authentication-api

15. **JWT Token Generator**  
    🔹 This is a token issuance API in Node.js with TypeScript, generating JWTs, using jsonwebtoken, login endpoint, no database, and Docker deployment for auth token practice.  
    🔹 **Project directory**: basic/15-jwt-token-generator

16. **Password Hashing Service**  
    🔹 This is a security utility in Node.js with TypeScript, hashing passwords with bcrypt, no APIs, command-line like execution, no database, and Docker deployment for crypto basics.  
    🔹 **Project directory**: basic/16-password-hashing-service

17. **Cron Job Scheduler**  
    🔹 This is a scheduled task service in Node.js with TypeScript, running cron jobs with node-cron, log periodic tasks, no database, no APIs, and Docker deployment for automation.  
    🔹 **Project directory**: basic/17-cron-job-scheduler

18. **WebSocket Echo Server**  
    🔹 This is a real-time echo server in Node.js with TypeScript, using ws library, echo messages back, no database, no security, and Docker deployment for WebSocket intro.  
    🔹 **Project directory**: basic/18-websocket-echo-server

19. **GraphQL Hello World**  
    🔹 This is a GraphQL API in Node.js with Apollo Server and TypeScript, simple query resolver, no database, one schema field, no security, and Docker deployment for query language practice.  
    🔹 **Project directory**: basic/19-graphql-hello-world

20. **Unit Testing Setup**  
    🔹 This is a testable service in Node.js with TypeScript, including Jest tests for functions, simple math API, no database, and Docker deployment for CI practice.  
    🔹 **Project directory**: basic/20-unit-testing-setup

21. **Middleware Chain API**  
    🔹 This is a middleware-focused backend in Node.js with Express and TypeScript, chaining custom middlewares, logging/auth, basic endpoints, no database, and Docker deployment for request pipeline.  
    🔹 **Project directory**: basic/21-middleware-chain-api

22. **Compression Enabled Server**  
    🔹 This is a response compressor in Node.js with TypeScript, using compression middleware, serve large text, no database, and Docker deployment for performance basics.  
    🔹 **Project directory**: basic/22-compression-enabled-server

23. **Helmet Security Headers**  
    🔹 This is a secure headers service in Node.js with Express and TypeScript, applying Helmet for HTTP headers, basic API, no database, and Docker deployment for web security.  
    🔹 **Project directory**: basic/23-helmet-security-headers

24. **Validation with Joi**  
    🔹 This is a input validation API in Node.js with TypeScript, using Joi schemas, validate POST data, echo endpoint, no database, and Docker deployment for data integrity.  
    🔹 **Project directory**: basic/24-validation-with-joi

25. **ORM with Prisma**  
    🔹 This is a database ORM service in Node.js with TypeScript, using Prisma with SQLite, CRUD operations, no APIs, and Docker Compose deployment for schema management.  
    🔹 **Project directory**: basic/25-orm-with-prisma

26. **Redis Cache Connector**  
    🔹 This is a caching layer in Node.js with TypeScript, connecting to Redis, set/get keys, no APIs, and Docker Compose deployment for cache intro.  
    🔹 **Project directory**: basic/26-redis-cache-connector

27. **RabbitMQ Publisher**  
    🔹 This is a message producer in Node.js with TypeScript, publishing to RabbitMQ queue, amqplib, no consumer, and Docker Compose deployment for MQ basics.  
    🔹 **Project directory**: basic/27-rabbitmq-publisher

28. **S3 File Uploader**  
    🔹 This is a cloud storage uploader in Node.js with TypeScript, uploading to MinIO (S3 compatible), using AWS SDK, POST endpoint, and Docker Compose deployment for object storage.  
    🔹 **Project directory**: basic/28-s3-file-uploader

29. **PDF Generator**  
    🔹 This is a document creator in Node.js with TypeScript, generating PDFs with pdfkit, GET endpoint for download, no database, and Docker deployment for report generation.  
    🔹 **Project directory**: basic/29-pdf-generator

30. **CSV Parser Service**  
    🔹 This is a data parser in Node.js with TypeScript, parsing CSV files with csv-parser, upload and process endpoint, no database, and Docker deployment for file processing.  
    🔹 **Project directory**: basic/30-csv-parser-service

31. **XML to JSON Converter**  
    🔹 This is a format converter API in Node.js with TypeScript, converting XML to JSON with xml2js, POST endpoint, no database, and Docker deployment for data transformation.  
    🔹 **Project directory**: basic/31-xml-to-json-converter

32. **Basic Proxy Server**  
    🔹 This is a forwarding proxy in Node.js with TypeScript, proxying requests to another server, using http-proxy, no security, and Docker deployment for interception practice.  
    🔹 **Project directory**: basic/32-basic-proxy-server

33. **Event Emitter Service**  
    🔹 This is an event-driven backend in Node.js with TypeScript, using built-in EventEmitter, trigger custom events, no APIs, and Docker deployment for pub/sub internals.  
    🔹 **Project directory**: basic/33-event-emitter-service

34. **Cluster Mode Server**  
    🔹 This is a multi-process server in Node.js with TypeScript, using cluster module, handle multiple workers, basic HTTP, and Docker deployment for scaling basics.  
    🔹 **Project directory**: basic/34-cluster-mode-server

35. **PM2 Managed App**  
    🔹 This is a process-managed service in Node.js with TypeScript, configured for PM2, simple API, no database, and Docker deployment for runtime management.  
    🔹 **Project directory**: basic/35-pm2-managed-app

36. **Swagger API Docs**  
    🔹 This is a documented API in Node.js with Express and TypeScript, using swagger-ui-express, describe endpoints, no database, and Docker deployment for API discovery.  
    🔹 **Project directory**: basic/36-swagger-api-docs

37. **Winston Logging**  
    🔹 This is an advanced logging service in Node.js with TypeScript, using Winston for file/console logs, Express integration, no database, and Docker deployment for log rotation.  
    🔹 **Project directory**: basic/37-winston-logging

38. **Bull Queue Processor**  
    🔹 This is a job queue in Node.js with TypeScript, using Bull with Redis, add/process jobs, no APIs, and Docker Compose deployment for background tasks.  
    🔹 **Project directory**: basic/38-bull-queue-processor

39. **Socket.io Chat Room**  
    🔹 This is a real-time chat service in Node.js with TypeScript, using Socket.io, broadcast messages, no database, and Docker deployment for multiplayer basics.  
    🔹 **Project directory**: basic/39-socket-io-chat-room

40. **GraphQL Mutation**  
    🔹 This is a GraphQL mutator in Node.js with Apollo and TypeScript, simple mutation resolver, in-memory data, no security, and Docker deployment for data changes.  
    🔹 **Project directory**: basic/40-graphql-mutation

41. **Integration Testing**  
    🔹 This is a test suite service in Node.js with TypeScript, using Supertest for API tests, simple Express app, no database, and Docker deployment for end-to-end checks.  
    🔹 **Project directory**: basic/41-integration-testing

42. **Helmet CSP Config**  
    🔹 This is a content security policy enforcer in Node.js with TypeScript, using Helmet CSP, protect against XSS, basic server, and Docker deployment for browser security.  
    🔹 **Project directory**: basic/42-helmet-csp-config

43. **Zod Validation**  
    🔹 This is a schema validation API in Node.js with TypeScript, using Zod for runtime checks, validate inputs, no database, and Docker deployment for type safety.  
    🔹 **Project directory**: basic/43-zod-validation

44. **Sequelize ORM**  
    🔹 This is an ORM connector in Node.js with TypeScript, using Sequelize with PostgreSQL, model definitions, no APIs, and Docker Compose deployment for relational DB.  
    🔹 **Project directory**: basic/44-sequelize-orm

45. **Memcached Client**  
    🔹 This is a caching client in Node.js with TypeScript, connecting to Memcached, set/get operations, no APIs, and Docker Compose deployment for alternative cache.  
    🔹 **Project directory**: basic/45-memcached-client

46. **Kafka Producer**  
    🔹 This is a message streamer in Node.js with TypeScript, producing to Kafka topic, using kafkajs, no consumer, and Docker Compose deployment for streaming basics.  
    🔹 **Project directory**: basic/46-kafka-producer

47. **GCS File Storage**  
    🔹 This is a cloud uploader in Node.js with TypeScript, to Google Cloud Storage emulation, using @google-cloud/storage, POST endpoint, and Docker Compose deployment.  
    🔹 **Project directory**: basic/47-gcs-file-storage

48. **Excel Exporter**  
    🔹 This is a spreadsheet generator in Node.js with TypeScript, exporting data to Excel with exceljs, GET download, no database, and Docker deployment.  
    🔹 **Project directory**: basic/48-excel-exporter

49. **JSON Web Token Verifier**  
    🔹 This is a token validation service in Node.js with TypeScript, verifying JWTs, middleware integration, protected route, and Docker deployment.  
    🔹 **Project directory**: basic/49-json-web-token-verifier

50. **Basic OAuth Client**  
    🔹 This is an OAuth integrator in Node.js with TypeScript, client-side flow with passport, login callback, no database, and Docker deployment for auth providers.  
    🔹 **Project directory**: basic/50-basic-oauth-client

## Intermediate

1. **RESTful User Management API**  
   🔹 This is a user management backend in Node.js with Express and TypeScript, using MongoDB for data, REST APIs with 5 endpoints for CRUD, JWT security, and Docker Compose deployment for handling up to 500 users.  
   🔹 **Project directory**: intermediate/01-restful-user-management-api

2. **Caching Layer with Redis**  
   🔹 This is a cached API service in Node.js with TypeScript, integrating Redis for query caching, Express endpoints, PostgreSQL backend, JWT auth, and Docker Compose deployment for performance improvement.  
   🔹 **Project directory**: intermediate/02-caching-layer-with-redis

3. **Message Queue Consumer**  
   🔹 This is a queue processor in Node.js with TypeScript, consuming from RabbitMQ, process tasks asynchronously, MongoDB for results, no security, and Docker Compose deployment for decoupling.  
   🔹 **Project directory**: intermediate/03-message-queue-consumer

4. **OAuth2 Server**  
   🔹 This is an auth provider backend in Node.js with TypeScript, implementing OAuth2 with passport-oauth2, token endpoints, MongoDB users, and Docker Compose deployment for identity management.  
   🔹 **Project directory**: intermediate/04-oauth2-server

5. **API Testing with Jest**  
   🔹 This is a fully tested API in Node.js with Express and TypeScript, comprehensive Jest suites, SQLite data, REST endpoints, JWT, and Docker deployment for quality assurance.  
   🔹 **Project directory**: intermediate/05-api-testing-with-jest

6. **Microservice Communication**  
   🔹 This is a microservices setup in Node.js with TypeScript, two services communicating via HTTP, Express in each, shared Redis, no auth, and Docker Compose deployment for service discovery.  
   🔹 **Project directory**: intermediate/06-microservice-communication

7. **File Streaming Server**  
   🔹 This is a media streamer in Node.js with TypeScript, streaming files with range requests, fs module, no database, and Docker deployment for large file handling.  
   🔹 **Project directory**: intermediate/07-file-streaming-server

8. **Webhook Receiver**  
   🔹 This is a webhook handler in Node.js with Express and TypeScript, verifying signatures, process events, MongoDB storage, HMAC security, and Docker Compose deployment for integrations.  
   🔹 **Project directory**: intermediate/08-webhook-receiver

9. **GraphQL Subscriptions**  
   🔹 This is a real-time GraphQL API in Node.js with Apollo and TypeScript, PubSub subscriptions, Redis backend, JWT auth, and Docker Compose deployment for live updates.  
   🔹 **Project directory**: intermediate/09-graphql-subscriptions

10. **Rate Limiter with Redis**  
    🔹 This is an advanced rate limiter in Node.js with TypeScript, using Redis for distributed limiting, Express middleware, no database, and Docker deployment for API protection.  
    🔹 **Project directory**: intermediate/10-rate-limiter-with-redis

11. **Multi-Tenant API**  
    🔹 This is a tenant-isolated backend in Node.js with TypeScript, subdomain-based tenancy, PostgreSQL schemas, REST APIs, JWT with tenant claims, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/11-multi-tenant-api

12. **Background Job Scheduler**  
    🔹 This is a job orchestrator in Node.js with TypeScript, using Agenda with MongoDB, schedule recurring jobs, API to trigger, no security, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/12-background-job-scheduler

13. **SSE Notification Server**  
    🔹 This is a server-sent events service in Node.js with TypeScript, pushing updates via SSE, EventEmitter backend, no database, and Docker deployment for one-way real-time.  
    🔹 **Project directory**: intermediate/13-sse-notification-server

14. **API Gateway Proxy**  
    🔹 This is a gateway service in Node.js with TypeScript, proxying to multiple backends, http-proxy-middleware, route-based forwarding, JWT validation, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/14-api-gateway-proxy

15. **Data Migration Script**  
    🔹 This is a DB migrator in Node.js with TypeScript, using Knex for migrations, PostgreSQL target, command-line execution, no APIs, and Docker Compose deployment for schema evolution.  
    🔹 **Project directory**: intermediate/15-data-migration-script

16. **Elasticsearch Indexer**  
    🔹 This is a search indexer in Node.js with TypeScript, indexing docs to Elasticsearch, @elastic/elasticsearch client, sync from MongoDB, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/16-elasticsearch-indexer

17. **Prometheus Metrics**  
    🔹 This is a monitored API in Node.js with Express and TypeScript, exposing metrics with prom-client, custom counters, PostgreSQL data, and Docker Compose deployment for observability.  
    🔹 **Project directory**: intermediate/17-prometheus-metrics

18. **gRPC Server**  
    🔹 This is a gRPC service in Node.js with TypeScript, defining proto and implementing methods, @grpc/grpc-js, unary calls, no database, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/18-grpc-server

19. **Circuit Breaker Pattern**  
    🔹 This is a resilient caller in Node.js with TypeScript, using opossum for circuit breaking, call external APIs, fallback logic, and Docker deployment for fault tolerance.  
    🔹 **Project directory**: intermediate/19-circuit-breaker-pattern

20. **Bulk Data Importer**  
    🔹 This is a data loader in Node.js with TypeScript, importing CSV to MongoDB, fast-csv and bulk ops, command-line, no security, and Docker Compose deployment for ETL basics.  
    🔹 **Project directory**: intermediate/20-bulk-data-importer

21. **Role-Based Access Control**  
    🔹 This is an RBAC API in Node.js with Express and TypeScript, using roles in JWT, middleware checks, PostgreSQL users/roles, and Docker Compose deployment for authorization.  
    🔹 **Project directory**: intermediate/21-role-based-access-control

22. **Thumbnail Generator**  
    🔹 This is an image processor in Node.js with TypeScript, generating thumbs with sharp, upload endpoint, S3 storage, and Docker deployment for media optimization.  
    🔹 **Project directory**: intermediate/22-thumbnail-generator

23. **SMS Sender Service**  
    🔹 This is a notification sender in Node.js with TypeScript, sending SMS via Twilio, API endpoint, MongoDB logs, API key security, and Docker deployment.  
    🔹 **Project directory**: intermediate/23-sms-sender-service

24. **Two-Factor Auth**  
    🔹 This is a 2FA backend in Node.js with TypeScript, generating/verifying TOTP with speakeasy, integrate with login, PostgreSQL storage, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/24-two-factor-auth

25. **E2E Testing with Cypress**  
    🔹 This is a testable service in Node.js with TypeScript, Cypress for E2E API tests, Express app, MongoDB, and Docker Compose deployment for full testing.  
    🔹 **Project directory**: intermediate/25-e2e-testing-with-cypress

26. **Service Discovery with Consul**  
    🔹 This is a discoverable microservice in Node.js with TypeScript, registering with Consul, health checks, Express API, and Docker Compose deployment for dynamic environments.  
    🔹 **Project directory**: intermediate/26-service-discovery-with-consul

27. **Video Transcoder**  
    🔹 This is a media converter in Node.js with TypeScript, transcoding videos with fluent-ffmpeg, upload/process endpoint, S3 output, and Docker deployment for streaming prep.  
    🔹 **Project directory**: intermediate/27-video-transcoder

28. **Payment Gateway Integrator**  
    🔹 This is a payment processor in Node.js with TypeScript, integrating Stripe webhooks, handle charges, MongoDB records, and Docker Compose deployment for e-commerce.  
    🔹 **Project directory**: intermediate/28-payment-gateway-integrator

29. **Schema-First GraphQL**  
    🔹 This is a schema-driven GraphQL API in Node.js with TypeScript, using graphql-tools, resolvers with Prisma, JWT auth, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/29-schema-first-graphql

30. **Distributed Locking**  
    🔹 This is a lock manager in Node.js with TypeScript, using Redlock with Redis, prevent concurrent ops, API demo, and Docker deployment for consistency.  
    🔹 **Project directory**: intermediate/30-distributed-locking

31. **Audit Logging**  
    🔹 This is an auditing service in Node.js with Express and TypeScript, logging actions to MongoDB, middleware integration, user tracking, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/31-audit-logging

32. **Reverse Proxy with Nginx**  
    🔹 This is a proxy frontend in Node.js with TypeScript, but configured with Nginx in Docker, load balance Node apps, and Docker Compose deployment for traffic management.  
    🔹 **Project directory**: intermediate/32-reverse-proxy-with-nginx

33. **Event Sourcing Intro**  
    🔹 This is an event-based store in Node.js with TypeScript, storing events in PostgreSQL, replay for state, simple aggregate, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/33-event-sourcing-intro

34. **Worker Threads Pool**  
    🔹 This is a multi-threaded service in Node.js with TypeScript, using worker_threads for CPU tasks, pool management, API trigger, and Docker deployment.  
    🔹 **Project directory**: intermediate/34-worker-threads-pool

35. **CI/CD Pipeline Config**  
    🔹 This is a deployable app in Node.js with TypeScript, with GitHub Actions YAML for CI/CD, Express API, tests, and Docker deployment for automation practice.  
    🔹 **Project directory**: intermediate/35-ci-cd-pipeline-config

36. **OpenAPI Generator**  
    🔹 This is a spec-generated API in Node.js with TypeScript, using openapi-generator for client/server, Express implementation, and Docker deployment.  
    🔹 **Project directory**: intermediate/36-openapi-generator

37. **Morgan Logging**  
    🔹 This is a request logger in Node.js with TypeScript, using Morgan with rotation, Express integration, file outputs, and Docker deployment.  
    🔹 **Project directory**: intermediate/37-morgan-logging

38. **Agenda Job Queue**  
    🔹 This is a persistent queue in Node.js with TypeScript, Agenda with MongoDB, retry/fail handling, API to schedule, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/38-agenda-job-queue

39. **Real-Time Collaboration**  
    🔹 This is a collab server in Node.js with TypeScript, using Socket.io with rooms, shared state, Redis pub/sub, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/39-real-time-collaboration

40. **GraphQL Federation**  
    🔹 This is a federated GraphQL service in Node.js with Apollo and TypeScript, one subgraph, extend types, JWT, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/40-graphql-federation

41. **Load Testing with Artillery**  
    🔹 This is a performance-tested API in Node.js with TypeScript, Artillery script for load, Express endpoints, monitor with Prometheus, and Docker deployment.  
    🔹 **Project directory**: intermediate/41-load-testing-with-artillery

42. **CSRF Protection**  
    🔹 This is a secure form API in Node.js with TypeScript, using csurf middleware, token generation, PostgreSQL sessions, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/42-csrf-protection

43. **TypeORM Integration**  
    🔹 This is an ORM service in Node.js with TypeScript, using TypeORM with MySQL, entities/repos, API CRUD, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/43-typeorm-integration

44. **Etcd Config Store**  
    🔹 This is a config manager in Node.js with TypeScript, watching etcd keys, dynamic reload, Express use, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/44-etcd-config-store

45. **Kafka Consumer Group**  
    🔹 This is a group consumer in Node.js with TypeScript, kafkajs with partitions, process messages, MongoDB store, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/45-kafka-consumer-group

46. **Azure Blob Uploader**  
    🔹 This is a cloud storage service in Node.js with TypeScript, to Azure Blob emulation, @azure/storage-blob, endpoint, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/46-azure-blob-uploader

47. **Report Generator**  
    🔹 This is a multi-format reporter in Node.js with TypeScript, PDF/CSV/Excel from data, ejs templates, API download, and Docker deployment.  
    🔹 **Project directory**: intermediate/47-report-generator

48. **Session Management**  
    🔹 This is a session-based auth in Node.js with TypeScript, express-session with Redis store, login/logout, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/48-session-management

49. **Federated Auth with SAML**  
    🔹 This is a SAML integrator in Node.js with TypeScript, passport-saml, SSO login, user mapping, and Docker deployment.  
    🔹 **Project directory**: intermediate/49-federated-auth-with-saml

50. **Feature Flagging**  
    🔹 This is a flagged API in Node.js with TypeScript, using unleash-client, toggle endpoints, MongoDB flags, and Docker Compose deployment.  
    🔹 **Project directory**: intermediate/50-feature-flagging

## Advanced

1. **Scalable Microservices Architecture**  
   🔹 This is a microservices backend in Node.js with TypeScript, three services with gRPC communication, PostgreSQL and Redis for data, REST/gRPC APIs with 10 endpoints, JWT/OAuth security, and Docker Compose deployment for scalability up to 10k users.  
   🔹 **Project directory**: advanced/01-scalable-microservices-architecture

2. **CQRS Pattern Implementation**  
   🔹 This is a CQRS-based service in Node.js with TypeScript, separate command/query handlers, EventStoreDB for events, MongoDB views, API endpoints, JWT, and Docker Compose deployment for complex domains.  
   🔹 **Project directory**: advanced/02-cqrs-pattern-implementation

3. **Distributed Tracing with Jaeger**  
   🔹 This is a traced microservices setup in Node.js with TypeScript, opentelemetry integration, span exports to Jaeger, multiple services, Redis data, and Docker Compose deployment for observability.  
   🔹 **Project directory**: advanced/03-distributed-tracing-with-jaeger

4. **Serverless Function Emulator**  
   🔹 This is a serverless-like API in Node.js with TypeScript, using serverless-offline, AWS Lambda style handlers, DynamoDB local, JWT, and Docker deployment for cloud simulation.  
   🔹 **Project directory**: advanced/04-serverless-function-emulator

5. **Advanced Testing with Mocking**  
   🔹 This is a mocked service test suite in Node.js with TypeScript, Jest with sinon mocks, external service stubs, PostgreSQL, end-to-end, and Docker Compose deployment.  
   🔹 **Project directory**: advanced/05-advanced-testing-with-mocking

6. **Event-Driven Microservices**  
   🔹 This is an event-sourced system in Node.js with TypeScript, Kafka for events, multiple consumers, MongoDB projections, JWT security, and Docker Compose deployment for loose coupling.  
   🔹 **Project directory**: advanced/06-event-driven-microservices

7. **Video Streaming Service**  
   🔹 This is a streaming backend in Node.js with TypeScript, HLS/DASH with ffmpeg, adaptive bitrate, S3 storage, API for playback, token auth, and Docker deployment for media delivery.  
   🔹 **Project directory**: advanced/07-video-streaming-service

8. **Blockchain Integrator**  
   🔹 This is a web3 connector in Node.js with TypeScript, ethers.js for Ethereum interactions, smart contract calls, MongoDB tx logs, API endpoints, and Docker Compose deployment.  
   🔹 **Project directory**: advanced/08-blockchain-integrator

9. **GraphQL Gateway**  
   🔹 This is a federated gateway in Node.js with Apollo and TypeScript, stitching multiple subgraphs, auth propagation, caching, and Docker Compose deployment for unified API.  
   🔹 **Project directory**: advanced/09-graphql-gateway

10. **AI Model Inference Server**  
    🔹 This is an ML serving API in Node.js with TypeScript, TensorFlow.js inference, model loading, POST predictions, no training, and Docker deployment for edge AI.  
    🔹 **Project directory**: advanced/10-ai-model-inference-server

11. **Multi-Region Deployment**  
    🔹 This is a geo-distributed service in Node.js with TypeScript, Consul for multi-DC, Express with region routing, PostgreSQL replication, JWT, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/11-multi-region-deployment

12. **Long-Running Job Manager**  
    🔹 This is a workflow orchestrator in Node.js with TypeScript, Temporal.io for workflows, durable execution, API triggers, MongoDB state, and Docker Compose deployment for reliability.  
    🔹 **Project directory**: advanced/12-long-running-job-manager

13. **WebRTC Signaling Server**  
    🔹 This is a P2P signaling backend in Node.js with TypeScript, Socket.io for WebRTC offers/answers, room management, no media relay, and Docker deployment for video calls.  
    🔹 **Project directory**: advanced/13-webrtc-signaling-server

14. **Custom Load Balancer**  
    🔹 This is a balancer service in Node.js with TypeScript, round-robin proxying, health checks, multiple backends, and Docker Compose deployment for custom traffic.  
    🔹 **Project directory**: advanced/14-custom-load-balancer

15. **Database Sharding**  
    🔹 This is a sharded DB accessor in Node.js with TypeScript, shard key routing, MongoDB shards, CRUD APIs, JWT, and Docker Compose deployment for horizontal scaling.  
    🔹 **Project directory**: advanced/15-database-sharding

16. **Full-Text Search Engine**  
    🔹 This is a search service in Node.js with TypeScript, MeiliSearch integration, indexing/querying, sync from PostgreSQL, API search, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/16-full-text-search-engine

17. **APM with New Relic**  
    🔹 This is a performance-monitored API in Node.js with TypeScript, New Relic agent, transaction tracing, Express, Redis, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/17-apm-with-new-relic

18. **gRPC Streaming Server**  
    🔹 This is a streaming gRPC service in Node.js with TypeScript, bidirectional streams, @grpc/grpc-js, real-time data, MongoDB, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/18-grpc-streaming-server

19. **Retry and Backoff Strategy**  
    🔹 This is a resilient integrator in Node.js with TypeScript, axios with retry-axios, exponential backoff, fallback, and Docker deployment for unreliable services.  
    🔹 **Project directory**: advanced/19-retry-and-backoff-strategy

20. **Data Pipeline ETL**  
    🔹 This is an ETL pipeline in Node.js with TypeScript, Apache Beam emulation, extract/transform/load, S3 to BigQuery like, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/20-data-pipeline-etl

21. **ABAC Authorization**  
    🔹 This is an attribute-based access control in Node.js with TypeScript, Casbin for policies, middleware, PostgreSQL rules, JWT attributes, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/21-abac-authorization

22. **OCR Image Processor**  
    🔹 This is a text extractor in Node.js with TypeScript, Tesseract.js for OCR, upload/process, store results in MongoDB, and Docker deployment.  
    🔹 **Project directory**: advanced/22-ocr-image-processor

23. **Push Notification Server**  
    🔹 This is a notifier backend in Node.js with TypeScript, FCM/APNS via firebase-admin, device tokens, MongoDB subs, JWT, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/23-push-notification-server

24. **Biometric Auth Integrator**  
    🔹 This is a biometric verifier in Node.js with TypeScript, WebAuthn implementation, register/authenticate, PostgreSQL storage, and Docker deployment.  
    🔹 **Project directory**: advanced/24-biometric-auth-integrator

25. **Chaos Engineering Setup**  
    🔹 This is a resilient tester in Node.js with TypeScript, Chaos Monkey like scripts, inject failures, monitor with Prometheus, Express, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/25-chaos-engineering-setup

26. **Zero-Downtime Deployment**  
    🔹 This is a blue-green deployable app in Node.js with TypeScript, PM2 for zero-downtime, CI/CD hooks, PostgreSQL, and Docker deployment for rolling updates.  
    🔹 **Project directory**: advanced/26-zero-downtime-deployment

27. **AR/VR Data Backend**  
    🔹 This is a spatial data server in Node.js with TypeScript, handling 3D coords, WebSocket for updates, MongoDB geospatial, and Docker deployment.  
    🔹 **Project directory**: advanced/27-ar-vr-data-backend

28. **Crypto Trading Bot**  
    🔹 This is a trading simulator in Node.js with TypeScript, CCXT for exchanges, strategy execution, backtesting, MongoDB logs, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/28-crypto-trading-bot

29. **Code-First GraphQL with Nexus**  
    🔹 This is a code-first GraphQL API in Node.js with TypeScript, Nexus for schema, Prisma resolvers, federation ready, JWT, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/29-code-first-graphql-with-nexus

30. **Distributed Transactions**  
    🔹 This is a saga orchestrator in Node.js with TypeScript, for distributed tx, compensating actions, Kafka events, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/30-distributed-transactions

31. **Compliance Audit Trail**  
    🔹 This is a compliant logger in Node.js with TypeScript, immutable logs to PostgreSQL, blockchain-like hashing, API actions, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/31-compliance-audit-trail

32. **NGINX Module Integration**  
    🔹 This is a custom NGINX extender in Node.js with TypeScript, Lua scripts calling Node, advanced proxy, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/32-nginx-module-integration

33. **Advanced Event Sourcing**  
    🔹 This is a full ES system in Node.js with TypeScript, snapshots, projections, EventStoreDB, CQRS integration, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/33-advanced-event-sourcing

34. **WebAssembly Integration**  
    🔹 This is a WASM runner in Node.js with TypeScript, loading/executing WASM modules, performance tasks, API invoke, and Docker deployment.  
    🔹 **Project directory**: advanced/34-webassembly-integration

35. **GitOps Deployment**  
    🔹 This is a GitOps-ready service in Node.js with TypeScript, ArgoCD manifests, auto-sync, Express, and Docker deployment for declarative deploys.  
    🔹 **Project directory**: advanced/35-gitops-deployment

36. **AsyncAPI Docs**  
    🔹 This is a message-documented service in Node.js with TypeScript, AsyncAPI for Kafka schemas, generator tools, and Docker deployment.  
    🔹 **Project directory**: advanced/36-asyncapi-docs

37. **ELK Stack Logging**  
    🔹 This is a centralized logger in Node.js with TypeScript, Winston to Elasticsearch, Kibana viz, Express, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/37-elk-stack-logging

38. **BullMQ Advanced Queues**  
    🔹 This is a pro queue system in Node.js with TypeScript, BullMQ with Redis, priorities/delays, worker scaling, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/38-bullmq-advanced-queues

39. **Operational Transformation Server**  
    🔹 This is a doc collab backend in Node.js with TypeScript, OT for conflicts, Socket.io transport, Redis state, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/39-operational-transformation-server

40. **Apollo GraphQL Cache**  
    🔹 This is an advanced GraphQL with in-memory cache in Node.js with TypeScript, Apollo cache control, directives, federation, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/40-apollo-graphql-cache

41. **K6 Load Testing**  
    🔹 This is a stress-tested API in Node.js with TypeScript, K6 scripts for scenarios, thresholds, Express, Prometheus export, and Docker deployment.  
    🔹 **Project directory**: advanced/41-k6-load-testing

42. **OWASP Security Suite**  
    🔹 This is a hardened API in Node.js with TypeScript, full OWASP checks, helmet/lusca, input sanitization, PostgreSQL, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/42-owasp-security-suite

43. **MikroORM Usage**  
    🔹 This is an advanced ORM service in Node.js with TypeScript, MikroORM with MongoDB, unit of work, API, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/43-mikroorm-usage

44. **Vault Secrets Manager**  
    🔹 This is a secure config in Node.js with TypeScript, HashiCorp Vault client, dynamic secrets, Express use, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/44-vault-secrets-manager

45. **Apache Kafka Streams**  
    🔹 This is a stream processor in Node.js with TypeScript, kafkajs streams, transformations, state stores, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/45-apache-kafka-streams

46. **AWS S3 Multipart Upload**  
    🔹 This is a large file handler in Node.js with TypeScript, AWS SDK multipart, progress tracking, endpoint, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/46-aws-s3-multipart-upload

47. **Dashboard Data Aggregator**  
    🔹 This is an analytics aggregator in Node.js with TypeScript, query multiple DBs, cache results, API for charts, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/47-dashboard-data-aggregator

48. **Redis Pub/Sub Scaler**  
    🔹 This is a scalable pub/sub in Node.js with TypeScript, Redis cluster, multiple subscribers, load balanced, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/48-redis-pub-sub-scaler

49. **OIDC Provider**  
    🔹 This is an OpenID Connect server in Node.js with TypeScript, oidc-provider, full flows, PostgreSQL, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/49-oidc-provider

50. **ML Recommendation Engine**  
    🔹 This is a recommender backend in Node.js with TypeScript, simple ML with brain.js, user data from MongoDB, API suggestions, and Docker Compose deployment.  
    🔹 **Project directory**: advanced/50-ml-recommendation-engine