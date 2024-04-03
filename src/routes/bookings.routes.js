import express from 'express';
import { createBooking, getBooking, updateBooking } from '../controller/booking.controller.js';

export const bookingsRoutes = express.Router();

bookingsRoutes.post('/', createBooking)
bookingsRoutes.get('/:id', getBooking)
bookingsRoutes.put('/:id', updateBooking)
