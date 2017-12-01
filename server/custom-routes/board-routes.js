var Users = require('../models/user')
var Boards = require( '../models/board')
var Tasks = require('../models/task')
var Lists = require('../models/list')
var Comments = require('../models/comment')




module.exports = {





    // getBoardByBoardId: {
    //     path: '/boards/:boardId',
    //     reqType: 'get',
    //     method(req, res, next){
    //       let action = 'Find Lists By BoardId'
    //       Lists.find({boardId: req.params.boardId})
    //         .then(lists => {
    //           res.send(handleResponse(action, lists))
    //         }).catch(error => {
    //           return next(handleResponse(action, null, error))
    //         })
    //     }
    //   },
    getListsByBoardId: {
        path: '/boards/:boardId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Lists By BoardId'
            Lists.find({ boardId: req.params.boardId })
                .then(lists => {
                    res.send(handleResponse(action, lists))
                }).catch(error => {
                    console.log(error)
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getTasksByListId: {
        path: '/boards/:boardId/lists/:listId/tasks',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Tasks By ListId'
            Tasks.find({ listId: req.params.listId })
                .then(tasks => {
                    res.send(handleResponse(action, tasks))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getCommentsByTaskId: {
        path: '/boards/:boardId/lists/:listId/tasks/:taskId/comments',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Comments By TaskId'
            Comments.find({ taskId: req.params.taskId })
                .then(comments => {
                    res.send(handleResponse(action, comments))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }





}





function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}