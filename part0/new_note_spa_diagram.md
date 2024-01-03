```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa {content: "test", date: "2024-01-03T11:52:14.000Z"}
    activate server
    server-->>browser: 201 Found {message: "note created"}
    deactivate server

    Note right of browser: The note is created on the server. The browser rerenders.
```