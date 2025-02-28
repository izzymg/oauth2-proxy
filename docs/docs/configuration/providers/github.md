---
id: github
title: GitHub
---

1.  Create a new project: https://github.com/settings/developers
2.  Under `Authorization callback URL` enter the correct url ie `https://internal.yourcompany.com/oauth2/callback`

The GitHub auth provider supports two additional ways to restrict authentication to either organization and optional 
team level access, or to collaborators of a repository. Restricting by these options is normally accompanied with `--email-domain=*`. Additionally, all the organizations and teams a user belongs to are set as part of the `X-Forwarded-Groups` header. e.g. `org1:team1,org1:team2,org2:team1`

NOTE: When `--github-user` is set, the specified users are allowed to log in even if they do not belong to the specified 
org and team or collaborators.

To restrict by organization only, include the following flag:

    -github-org="": restrict logins to members of this organisation

To restrict within an organization to specific teams, include the following flag in addition to `-github-org`:

    -github-team="": restrict logins to members of any of these teams (slug), separated by a comma

If you would rather restrict access to collaborators of a repository, those users must either have push access to a 
public repository or any access to a private repository:

    -github-repo="": restrict logins to collaborators of this repository formatted as orgname/repo

If you'd like to allow access to users with **read only** access to a **public** repository you will need to provide a 
[token](https://github.com/settings/tokens) for a user that has write access to the repository. The token must be 
created with at least the `public_repo` scope:

    -github-token="": the token to use when verifying repository collaborators

To allow a user to log in with their username even if they do not belong to the specified org and team or collaborators, 
separated by a comma

    -github-user="": allow logins by username, separated by a comma

If you are using GitHub enterprise, make sure you set the following to the appropriate url:

    -login-url="http(s)://<enterprise github host>/login/oauth/authorize"
    -redeem-url="http(s)://<enterprise github host>/login/oauth/access_token"
    -validate-url="http(s)://<enterprise github host>/api/v3"
