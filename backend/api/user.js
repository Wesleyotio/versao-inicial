const bycrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bycrypt.genSaltSync(10)
        return bycrypt.hashSync(password,salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.mame, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informado')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem' )
            const userFromDB = await app.db('users')
                .where({email: user.email }).first()

            if(!user.id){
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch (error) {
            return res.status(400).send(msg)
        }
        user.password = encryptPassword(req.body.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({id: user.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {

    }
    return { save }
}