# SpeechToDoc (working title)
Main functionality: speak emails, documents, whatever. Save as an individual document. Send it to yourself for further editing (or edit here on the site).

### To Do
- ~~Create a `Document` model - save speech-generated text as a `Document` record.~~
- Allow users to edit their documents.
- Allow users to email themselves their documents.
- Create users and allow users to view only their own documents.
- Add in speech synthesis so the program can speak aloud your documents.
- Deal with paragraphs so that every pause doesn't become a new section and users can set their own line breaks.
- Use page-specific Javascript, rather than having the listener load for every page.
- Translate page breaks from document into paragraphs (right now it all ends up in one big string).

### Built With
- Rails
- HAML
- Javascript

### Mad props to
- [Wes Bos](http://www.twitter.com/@wesbos), without whose #Javascript30 I would never have thought to include voice recognition or speech synthesis in a project of my own (and who also makes it look easy).
