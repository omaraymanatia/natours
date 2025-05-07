const AppError = require('./../utils/AppError');
const Review = require('./../db/reviewSchema');
const APIFeatures = require('./../utils/APIFeatures');
const catchAsync = require('./../utils/catchAsync');

exports.getAllReviews = async (req, res, next) => {
  const reviews = await Review.find();

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
};

exports.createReview = async (req, res, next) => {
  if(!req.body.tour) req.body.tour = req.params.tourId;
  if(!req.body.user) req.body.user = req.user._id;
  const newReview = await Review.create({
    review: req.body.review,
    rating: req.body.rating,
    user: req.user._id,
    tour: req.params.tourId,
  });

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
};
