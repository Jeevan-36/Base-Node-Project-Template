const crudRepository =require('./crud-repository.js')
const {Flight, City}=require('../models')
const {Airplane}=require('../models')
const {Airport} = require('../models');
const {Sequelize}=require('sequelize');
class FlightRepository extends crudRepository{
    constructor() {
        super(Flight)
        }
        async getAllFlights(filter,sortFilter)
        {
            const response=await Flight.findAll({
                'where':filter,
                'order':sortFilter,
                attributes: [
                    'id',
                    'flightNumber',
                    'airplaneId',
                    'departureAirportId',
                    'arrivalAirportId',
                    'arrivalTime',
                    'departureTime',
                    'price',
                    'boardingGate',
                    'totalSeats',
                    'createdAt',
                    'updatedAt',
                ],
                'include':[{
                    model:Airplane,
                },{
                 model:Airport,
                 on:{
                    col1:Sequelize.where(
                        Sequelize.col('DepartureAirport.code'),
                        '=',
                        Sequelize.col('Flight.departureAirportId')
                    )
                 },
               as:'DepartureAirport',
               include:{
                model:City,
               }
                },
                {
                    model:Airport,
                    on:{
                        col1:Sequelize.where(
                            Sequelize.col('ArrivalAirport.code'),
                            '=',
                            Sequelize.col('Flight.arrivalAirportId')
                            )
                            },
                            as:'ArrivalAirport',
                            include:{
                             model:City,
                            }
                            },
            
            
            ]
            });
            return response;
        }
}
module.exports = FlightRepository;