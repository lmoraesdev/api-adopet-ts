# Adopet API

REST API for pet adoption management — built with Node.js, TypeScript, Express and TypeORM. First end-to-end project I built solo, designed and implemented from scratch.

![status](https://img.shields.io/badge/status-stable-green)
![typescript](https://img.shields.io/badge/typescript-5.x-blue)
![license](https://img.shields.io/badge/license-MIT-blue)

---

## About

Adopet handles the full lifecycle of a pet adoption platform: shelters register the animals available for adoption, adopters create profiles, and the system matches and records adoptions. The API was the first full project I designed alone after finishing structured coursework, used as a way to consolidate concepts like layered architecture, input validation, and consistent error handling.

## Stack

| Layer | Tech |
|-------|------|
| Language | TypeScript |
| Runtime | Node.js |
| Framework | Express |
| ORM | TypeORM |
| Database | SQLite (dev) |
| Validation | Yup |
| Lint | ESLint |

## Architecture

The project follows a layered structure to keep concerns separated and make the codebase easier to evolve:

```
src/
├── controller/      # HTTP handlers
├── routes/          # Express route definitions
├── middleware/      # Validation, error handling
├── entities/        # TypeORM models
├── repositories/    # Data access (with interfaces)
├── enum/            # Shared enums
├── types/           # Custom types
├── util/            # Helpers
└── config/          # Database setup
```

### Decisions worth highlighting

- **Repository pattern with interfaces** — controllers depend on the interface, not the concrete class. Makes the code easier to test and swap implementations.
- **Validation middleware separated by route** — each request has its own schema, errors are returned in a consistent shape.
- **Centralized error handling** — a single middleware catches errors and formats the response, instead of try/catch in every controller.
- **SQLite for dev simplicity** — easy to run locally without setup. Production would use PostgreSQL with minimal changes thanks to TypeORM.

## Running locally

```bash
git clone https://github.com/lmoraesdev/api-adopet-ts.git
cd api-adopet-ts
npm install
npm run dev
```

Server starts on `http://localhost:3000`.

## Endpoints

### Shelters (`/abrigos`)
| Method | Path | Description |
|--------|------|-------------|
| POST   | /abrigos     | Create shelter |
| GET    | /abrigos     | List shelters |
| PUT    | /abrigos/:id | Update shelter |
| PATCH  | /abrigos/:id | Update shelter address |
| DELETE | /abrigos/:id | Remove shelter |

### Adopters (`/adotantes`)
| Method | Path | Description |
|--------|------|-------------|
| POST   | /adotantes     | Create adopter |
| GET    | /adotantes     | List adopters |
| PUT    | /adotantes/:id | Update adopter |
| PATCH  | /adotantes/:id | Update adopter address |
| DELETE | /adotantes/:id | Remove adopter |

### Pets (`/pets`)
| Method | Path | Description |
|--------|------|-------------|
| POST   | /pets                          | Create pet |
| GET    | /pets                          | List pets available for adoption |
| GET    | /pets/filtro                   | Search pets by attributes |
| PUT    | /pets/:id                      | Update pet |
| PUT    | /pets/:pet_id/:adotante_id     | Register adoption |
| DELETE | /pets/:id                      | Remove pet |

An Insomnia collection is included in the repo for quick testing.

## What I learned

- How to design a layered architecture from scratch, before any code is written
- The cost of skipping input validation early (every fix later is more painful than doing it upfront)
- Why repository interfaces matter — when I moved from in-memory mocks to SQLite, controllers didn't change
- How to keep error handling consistent across the app instead of scattered try/catch blocks

## Roadmap

- [ ] JWT authentication and route protection
- [ ] Unit and integration tests (Vitest)
- [ ] Migrate to PostgreSQL with TypeORM migrations
- [ ] Dockerfile and docker-compose
- [ ] Pagination on list endpoints

## License

MIT
