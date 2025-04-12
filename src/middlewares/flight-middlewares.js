const { StatusCodes } = require("http-status-codes");
const { ApiError } = require('../utils/index');

const validateCreateRequest = (req, res, next) => {
    const {
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        departureTime,
        arrivalTime,
        price,
        totalSeats,
    } = req.body;
    if (
        !flightNumber ||
        !airplaneId ||
        !departureAirportId ||
        !arrivalAirportId ||
        !departureTime ||
        !arrivalTime ||
        !price ||
        !totalSeats
    ) {
        return res.status(StatusCodes.BAD_REQUEST).json(
            new ApiError(StatusCodes.BAD_REQUEST, 'All fields are required')
        );
    }
    if (new Date(arrivalTime) <= new Date(departureTime)) {
        return res.status(StatusCodes.BAD_REQUEST).json(
            new ApiError(StatusCodes.BAD_REQUEST, 'Arrival time must be after departure time')
        );
    }

    next();
};

module.exports = { validateCreateRequest };