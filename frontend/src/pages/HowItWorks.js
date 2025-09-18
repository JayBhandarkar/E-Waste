import React from 'react';
import { QrCode, Smartphone, Truck, MapPin, Award, CheckCircle, Users, Recycle } from 'lucide-react';

const HowItWorks = () => {
  const userSteps = [
    {
      icon: Smartphone,
      title: 'Register Device',
      description: 'Create an account and register your electronic device on our platform',
      details: ['Sign up with email or phone', 'Add device details', 'Get unique device ID']
    },
    {
      icon: QrCode,
      title: 'Generate QR Code',
      description: 'Generate a unique QR code for your device that contains all tracking information',
      details: ['Instant QR generation', 'Secure device linking', 'Printable labels available']
    },
    {
      icon: Truck,
      title: 'Schedule Pickup',
      description: 'Schedule a convenient pickup time with certified e-waste collectors',
      details: ['Choose pickup time', 'Certified collectors', 'Free collection service']
    },
    {
      icon: Award,
      title: 'Earn Rewards',
      description: 'Receive points, certificates, and track your environmental impact',
      details: ['Instant reward points', 'Digital certificates', 'Impact tracking']
    }
  ];

  const collectorSteps = [
    {
      icon: MapPin,
      title: 'Receive Pickup Request',
      description: 'Get notified of pickup requests in your service area',
      details: ['Real-time notifications', 'Route optimization', 'Customer details']
    },
    {
      icon: QrCode,
      title: 'Scan & Collect',
      description: 'Scan QR codes to update device status and collect e-waste',
      details: ['Mobile app scanning', 'Status updates', 'Inventory tracking']
    },
    {
      icon: Truck,
      title: 'Transport to Facility',
      description: 'Safely transport collected e-waste to certified recycling facilities',
      details: ['Secure transportation', 'Chain of custody', 'Real-time tracking']
    },
    {
      icon: CheckCircle,
      title: 'Confirm Delivery',
      description: 'Confirm delivery at recycling facility and update system',
      details: ['Delivery confirmation', 'Weight verification', 'System updates']
    }
  ];

  const recyclerSteps = [
    {
      icon: CheckCircle,
      title: 'Receive E-Waste',
      description: 'Accept e-waste from collectors and verify QR codes',
      details: ['Intake verification', 'Quality assessment', 'Documentation']
    },
    {
      icon: Recycle,
      title: 'Process Materials',
      description: 'Dismantle and process devices to recover valuable materials',
      details: ['Safe dismantling', 'Material separation', 'Quality control']
    },
    {
      icon: Award,
      title: 'Issue Certificates',
      description: 'Generate certificates of proper recycling and material recovery',
      details: ['Digital certificates', 'Material reports', 'Compliance documentation']
    },
    {
      icon: Users,
      title: 'Update Stakeholders',
      description: 'Notify all stakeholders about successful recycling completion',
      details: ['User notifications', 'Impact updates', 'Reward distribution']
    }
  ];

  const WorkflowSection = ({ title, steps, bgColor }) => (
    <section className={`${bgColor} section-padding`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-eco-50 section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How E-Waste Loop Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A comprehensive three-stakeholder system connecting users, collectors, 
            and recyclers for transparent e-waste management.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Ecosystem</h2>
            <p className="text-xl text-gray-600">Three interconnected workflows for seamless e-waste management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Users className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Users</h3>
              <p className="text-gray-600">Register devices, generate QR codes, schedule pickups, and earn rewards</p>
            </div>
            <div className="card text-center">
              <Truck className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collectors</h3>
              <p className="text-gray-600">Receive requests, collect e-waste, and transport to recycling facilities</p>
            </div>
            <div className="card text-center">
              <Recycle className="h-16 w-16 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recyclers</h3>
              <p className="text-gray-600">Process materials, issue certificates, and complete the recycling loop</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Workflow */}
      <WorkflowSection 
        title="User Workflow" 
        steps={userSteps} 
        bgColor="bg-blue-50" 
      />

      {/* Collector Workflow */}
      <WorkflowSection 
        title="Collector Workflow" 
        steps={collectorSteps} 
        bgColor="bg-orange-50" 
      />

      {/* Recycler Workflow */}
      <WorkflowSection 
        title="Recycler Workflow" 
        steps={recyclerSteps} 
        bgColor="bg-primary-50" 
      />

      {/* Technology Features */}
      <section className="bg-gray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Features</h2>
            <p className="text-xl text-gray-300">Advanced features that make our system reliable and efficient</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <QrCode className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">QR Code Tracking</h3>
              <p className="text-gray-300">Unique QR codes for each device enabling complete traceability throughout the recycling process.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <MapPin className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Real-time Location</h3>
              <p className="text-gray-300">GPS tracking of e-waste from pickup to final recycling destination with live updates.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <Award className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Digital Certificates</h3>
              <p className="text-gray-300">Blockchain-verified certificates proving proper recycling and environmental compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;