Tourfluent

## Description

During this workshop we will create a software system for a startup travel agency called tourfluent. The first iteration of the system will consist of a set of services that are able to deal with travel requests and the booking of hotels and flights.

## Activities to perform

* Create project using jira plugin with following extensions
	* travelfluent
	
* Create data model
	* Traveller
	* Hotel
	* Flight
	* Address
	* Trip
* Create service classes
	* HotelBookingService
	* FlightBookingService
  * providing guide
* Create business logic
	* Public business process to deal with complete travel request
	* Private business process to deal with hotel booking
	* Private business process to deal with flight booking


## Data model

tour fluent booking system will be based on following data model

**Traveller**

A person who requests a new travel

**Trip**

Place/Location where the traveller wants to go and dates

**Flight**

Flight that has been booked for the traveller to take him/her to the destination

**Hotel**

Place/Location where the traveller will stay during his/her travel

**Address**

Location that is associated with either traveller or hotel

## Decision logic

The decision logic will be implemented as a decision table. The logic will be responsible for verifying whether a given traveller requires a visa to enter a given country or not. The decision logic reason over the following data/facts

* Destination that the traveller wants to go - hyderabad
* Nationality of the traveller
* Length of the stay

The result will be “yes” or “no”.



## Business logic

Business logic will be based on business processes

Public process that will be responsible for orchestrating complete travel request

Private process that will be responsible for booking a hotel.

Private process that will be responsible for booking a flight.

## Services

There will be services implemented to carry on the hotel and flight booking. Implementation will be a CDI beans that will have hard coded logic to return a booked flight or hotel.

# Try out the complete service

## Installing and Running

### Prerequisites

You will need:
  - html css

