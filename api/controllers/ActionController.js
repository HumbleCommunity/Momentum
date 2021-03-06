/**
 * PetitionController
 *
 * @description :: Server-side logic for managing petitions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	find: function (req, res) {
		Action.find()
			.where({campaign: req.param('id')})
			.populate('submissions')
			.exec(function(err,record){
  				if(err) return res.json(403, { err: err });
  				return res.json(200, record);
  			});
	},

	findOne: function(req, res) {
		Action.findOne(req.param('childid'))
			.exec(function(err,record){
  				if(err) return res.json(403, { err: err });
  				return res.json(200, record);
  			});
	},

	feedPublic: function(req, res) {
		Submission.find().where({action: req.param('childid')})
			.exec(function(err,record){
  				if(err) return res.json(403, { err: err });
  				return res.json(200, record);
  			});
	},

	feedPrivate: function(req, res) {
		Submission.find().where({action: req.param('childid')})
			.exec(function(err,record){
  				if(err) return res.json(403, { err: err });
  				return res.json(200, record);
  			});
	},

	create: function (req, res) {
		req.body.campaign = req.param('id');
		Action.create(req.body)
			.exec(function(err, record){
			  	if(err) return res.json(403, { err: err });
  				return res.json(200, record);
  			});
	},

	update: function (req, res) {
		Action.update(req.param('childid'), req.body)
			.exec(function(err, record) {
				if(err) return res.json(403, err);
				return res.json(200, record);
			});
	},

	destroy: function (req, res) {
		Action.destroy(req.param('childid'))
			.exec(function(err, record) {
				if(err) return res.json(403, err);
				return res.json(200, record);
			});
	},

};

