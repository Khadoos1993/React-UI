export const oidc = {
    authority: "https://localhost:5001/",
    client_id:"reactclient",
    redirect_uri:"http://localhost:3000/callback",
    response_type: "code",
    scope:"openid profile courselibraryapi roles",
    post_logout_redirect_uri:"http://localhost:3000",
}

