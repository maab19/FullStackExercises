```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Found {message: "note created"}
    deactivate server

    Note right of browser: The note is created on the server. The browser rerenders.
```