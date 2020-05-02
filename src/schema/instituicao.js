import { Instituicao, InstituicaoTC } from '../models/instituicao'

const InstituicaoQuery = {
    instituicaoById: InstituicaoTC.getResolver('findById'),
    instituicaoByIds: InstituicaoTC.getResolver('findByIds'),
    instituicaoOne: InstituicaoTC.getResolver('findOne'),
    instituicaoMany: InstituicaoTC.getResolver('findMany'),
    instituicaoCount: InstituicaoTC.getResolver('count'),
    instituicaoConnection: InstituicaoTC.getResolver('connection'),
    instituicaoPagination: InstituicaoTC.getResolver('pagination'),
}
const InstituicaoMutation = {
    instituicaoCreateOne: InstituicaoTC.getResolver('createOne'),
    instituicaoCreateMany: InstituicaoTC.getResolver('createMany'),
    instituicaoUpdateById: InstituicaoTC.getResolver('updateById'),
    instituicaoUpdateOne: InstituicaoTC.getResolver('updateOne'),
    instituicaoUpdateMany: InstituicaoTC.getResolver('updateMany'),
    instituicaoRemoveById: InstituicaoTC.getResolver('removeById'),
    instituicaoRemoveOne: InstituicaoTC.getResolver('removeOne'),
    instituicaoRemoveMany: InstituicaoTC.getResolver('removeMany'),
}

export { InstituicaoQuery, InstituicaoMutation }
