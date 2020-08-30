var login = new Vue({
    el: '#signup',
    data: {
        e: '',
        p: '',
        p2: '',
        b: '',
    },
    methods: {
        signup: function () {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.e, this.p)
                .catch(function (error) {
                    $('#error').text('No matching account found')
                })
        },
    },
})

firebase.auth().onAuthStateChanged(async function (u) {
    if (u) {
        var salt = await getSalt()

        var h = await hash_argon2(login.p, salt)

        await encryptSaveRSA(h.hashHex)

        window.location.href = '/'
    }
})
