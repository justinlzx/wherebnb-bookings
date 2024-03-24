import { create } from '../service/booking.service.js'
import * as bookingService from '../service/booking.service.js'
import Res from '../Res/response.js'

export const createBooking = async (req, res) => {
    try {

        const payload = req.body;

        const result = await create(payload);

        console.log(result)

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }
};

export const getBooking = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await bookingService.getBookingsByListingId(id);

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }

};

export const updateBooking = async (req, res) => {
    try{
        const id = req.params.id;
        const {
            checkedIn
        } = req.body;


        const result = await bookingService.updateCheckIn(id, checkedIn);

        return Res.successResponse(res, result)
    }
    catch (error) {
        return Res.errorResponse(res, error)
    }
};
