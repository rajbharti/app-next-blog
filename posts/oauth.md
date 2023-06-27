---
title: "What is OAuth 2.0?"
date: "2023-02-10"
---

- OAuth 2.0 (**Open Authorization**), is a standard designed to allow a website or application to access resources hosted by other web apps on behalf of a user.
- It provides consented access and restricts actions of what the client app can perform on resources on behalf of the user, without ever sharing the user's credentials.

### Principles of OAuth2.0

- It is an authorization protocol and NOT an authentication protocol.
- It is designed primarily as a means of granting access to a set of resources, for example, remote APIs or user data.
- OAuth 2.0 uses **Access Tokens**, which is a piece of data that represents the authorization to access resources on behalf of the end-user.
  - OAuth 2.0 doesn't define a specific format for Access Tokens. However, in some contexts, **the JSON Web Token (JWT)** format is often used.
  - This enables token issuers to include data in the token itself.
  - Also, for security reasons, Access Tokens may have an expiration date.

### OAuth2.0 Roles

- **Resource Owner:** The user or system that owns the protected resources and can grant access to them.
- **Client:** The client is the system that requires access to the protected resources. To access resources, the Client must hold the appropriate Access Token.
- **Authorization Server:** This server receives requests from the Client for Access Tokens and issues them upon successful authentication and consent by the Resource Owner. The authorization server exposes two endpoints: the Authorization endpoint, which handles the interactive authentication and consent of the user, and the Token endpoint, which is involved in a machine to machine interaction.
- **Resource Server:** A server that protects the user’s resources and receives access requests from the Client. It accepts and validates an Access Token from the Client and returns the appropriate resources to it.

### OAuth 2.0 Scopes

- They are used to specify exactly the reason for which access to resources may be granted.
- Acceptable scope values, and which resources they relate to, are dependent on the Resource Server.

### OAuth 2.0 Access Tokens and Authorization Code

- The OAuth 2 Authorization server may not directly return an Access Token after the Resource Owner has authorized access. Instead, and for better security, an **Authorization Code** may be returned, which is then exchanged for an Access Token.
- In addition, the Authorization server may also issue a **Refresh Token** with the Access Token.
  - Unlike Access Tokens, Refresh Tokens normally have long expiry times and may be exchanged for new Access Tokens when the latter expires.
  - Because Refresh Tokens have these properties, they have to be stored securely by clients.
