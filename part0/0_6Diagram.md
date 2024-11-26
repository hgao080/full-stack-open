```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Response code & appropriate function
    deactivate server

    Note right of browser: The browser executes the function to prevent default behaviour and handle adding the new note
```