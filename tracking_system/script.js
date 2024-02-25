function main(){
    //Create your constructor funtion with the name Shipment
        function Shipment(id, location, destination, status, resources){
            this.id = id
            this.location = location
            this.destination = destination
            this.status = status
            this.resources = resources
        }

    
    //Add the updateStatusAndResources using the object prototype
    Shipment.prototype.updateStatusAndResources = function(status, resources){
        this.status = status
        this.resources = resources
    }
    
    //Add the assignResource methods through Object prototype
    Shipment.prototype.assignResources = function(...args){
        this.resources.push(...args);
    }
    
    //Create the object literal with tthe name TrackingSystem
    const TrackingSystem = {
        shipments: [],
        updateStatus: function(id, status){
            this.shipments.map((shipment)=>{
                if(shipment.id === id){
                    shipment.status = status
                }
            })
        },
        viewShipment: function(id){
            const {id: shipmentID, status, resources, location, destination} = this.shipments.find(shipment=> shipment.id === id)
            console.log(`Shipment ID: ${shipmentID}`);
            console.log(`Status: ${status}`);
            console.log(`Resources: ${resources}`);
            console.log(`Location: ${location}`);
            console.log(`Destination: ${destination}`)
        }
    }
    
    return {Shipment,TrackingSystem};
    //do not modify any other code.
    }

    const {Shipment, TrackingSystem} = main()
    const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");
    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
    shipment2.updateStatusAndResources("In transit", ["Driver"]);
    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");
    TrackingSystem.viewShipment("12345");