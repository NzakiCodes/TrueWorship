const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema} = graphql;

const scheduleDatabase = [
    {title:"Praise and Worship 1",delay:5,id:1},
    {title:"Praise and Worship 2",delay:12,id:2},
    {title:"Praise and Worship 3",delay:23,id:3}
];
const songDatabase = [
    {title:"Halleluyah",delay:"5",id:21},
    {title:"Imela",delay:"12",id:22},
    {title:"No one like You",delay:"23",id:23}
]

const ScheduleType = new GraphQLObjectType({
    name:'schedule',
    fields: ()=>({
        id:{
            type:GraphQLID
        },
        title:{
            type:GraphQLString
        },
        delay:{
            type:GraphQLInt
        }
    })
});
const SongType = new GraphQLObjectType({
    name:'song',
    fields: ()=>({
        id:{
            type:GraphQLID
        },
        title:{
            type:GraphQLString
        },
        delay:{
            type:GraphQLString
        }
    })
});


const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        schedule: {
            type: ScheduleType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args){
                // eslint-disable-next-line eqeqeq
                return scheduleDatabase.find((item)=> { return item.id == args.id})
            }
        },
        song: {
            type: SongType,
            args: { id: { type: GraphQLID} },
            resolve(parent, args){
                // eslint-disable-next-line eqeqeq
                return songDatabase.find((item)=> { return item.id == args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
});