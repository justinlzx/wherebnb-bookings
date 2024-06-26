import { EntitySchema } from "typeorm";
import { Booking } from "../model/Booking.js";


export const BookingModel = new EntitySchema({
    name: "Booking",
    target: Booking,
    columns: {
        bookingId: {
            primary: true,
            type: "int",
            generated: true
        },
        listingId: {
            type: "int"
        },
        startDate: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        },
        endDate: {
            type: "datetime",
            default: () => "CURRENT_TIMESTAMP"
        },
        guestId: {
            type: "int"
        },
        createdAt: {
            type: "timestamp",
            createDate: true,
        },
        updatedAt: {
            type: "timestamp",
            createDate: true,
        },
        checkedIn: {
            type: "boolean",
            default: false
        }
    }
})