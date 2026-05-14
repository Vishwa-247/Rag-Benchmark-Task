"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  CreditCard,
  Shield,
  Calendar,
  Download,
  FileText,
} from "lucide-react";

export function MembershipPayment() {
  const [selectedPlan, setSelectedPlan] = useState("gold");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [activeTab, setActiveTab] = useState("current");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    upiId: "",
  });

  // Mock current membership data
  const currentMembership = {
    plan: "Gold Plan",
    status: "Active",
    startDate: "1 May 2024",
    expiryDate: "1 November 2024",
    daysRemaining: 0,
    autoRenewal: false,
  };

  // Mock order history
  const orderHistory = [
    {
      id: "ORD-2024-001",
      date: "1 May 2024",
      plan: "Gold Plan",
      duration: "6 months",
      amount: 826,
      paymentMethod: "Credit Card",
      status: "Completed",
      invoiceUrl: "#",
    },
    {
      id: "ORD-2023-089",
      date: "10 November 2023",
      plan: "Silver Plan",
      duration: "3 months",
      amount: 472,
      paymentMethod: "UPI",
      status: "Completed",
      invoiceUrl: "#",
    },
  ];

  const plans = [
    {
      id: "silver",
      name: "Silver Plan",
      price: 400,
      duration: "3 months",
      discount: null,
      features: [
        "Profile listing",
        "Respond to cases",
        "Basic messaging",
        "Email support",
        "3 months validity",
      ],
      popular: false,
    },
    {
      id: "gold",
      name: "Gold Plan",
      price: 700,
      duration: "6 months",
      discount: "12.5%",
      features: [
        "Enhanced profile with ratings",
        "Priority case notifications",
        "Advanced messaging",
        "Phone & email support",
        "6 months validity",
        "12.5% discount",
      ],
      popular: true,
    },
    {
      id: "platinum",
      name: "Platinum Plan",
      price: 1200,
      duration: "12 months",
      discount: "25%",
      features: [
        "All Gold Plan features",
        "Featured advocate badge",
        "Top search placement",
        "Priority support",
        "12 months validity",
        "25% discount - Best Value!",
      ],
      popular: false,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing - connect to payment gateway
    console.log("Processing payment:", {
      selectedPlan,
      paymentMethod,
      formData,
    });
  };

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Membership Management</h2>
        <p className="text-muted-foreground">
          Manage your subscription, view order history, and upgrade your plan
        </p>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current">Current Membership</TabsTrigger>
          <TabsTrigger value="history">Order History</TabsTrigger>
          <TabsTrigger value="upgrade">Upgrade Plan</TabsTrigger>
        </TabsList>

        {/* Current Membership Tab */}
        <TabsContent value="current" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Membership</CardTitle>
                <Badge className="bg-green-100 text-green-800">
                  {currentMembership.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-muted-foreground">Plan</Label>
                  <p className="text-xl font-semibold">
                    {currentMembership.plan}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Status</Label>
                  <p className="text-xl font-semibold">
                    {currentMembership.status}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Start Date</Label>
                  <p className="font-medium">{currentMembership.startDate}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Expiry Date</Label>
                  <p className="font-medium">{currentMembership.expiryDate}</p>
                </div>
              </div>

              <Separator />

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <p className="font-semibold text-blue-900">
                    {currentMembership.daysRemaining} days remaining
                  </p>
                </div>
                <p className="text-sm text-blue-700">
                  Your membership will expire on {currentMembership.expiryDate}
                </p>
              </div>

              <div className="flex gap-4">
                <Button onClick={() => setActiveTab("upgrade")}>
                  Upgrade Plan
                </Button>
                <Button variant="outline">
                  {currentMembership.autoRenewal ? "Disable" : "Enable"}{" "}
                  Auto-Renewal
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Order History Tab */}
        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-lg">
                          {order.plan} Plan
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Order ID: {order.id}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-700 border-green-200"
                      >
                        {order.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Date
                        </Label>
                        <p className="text-sm font-medium">{order.date}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Duration
                        </Label>
                        <p className="text-sm font-medium">{order.duration}</p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Amount
                        </Label>
                        <p className="text-sm font-medium">
                          ₹{order.amount.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">
                          Payment
                        </Label>
                        <p className="text-sm font-medium">
                          {order.paymentMethod}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download Invoice
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Upgrade Plan Tab */}
        <TabsContent value="upgrade" className="space-y-6">
          {/* Plan Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`cursor-pointer transition-all ${
                  selectedPlan === plan.id
                    ? "ring-2 ring-primary border-primary"
                    : "hover:shadow-md"
                } ${plan.popular ? "relative" : ""}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                {plan.discount && (
                  <div className="absolute -top-3 right-4">
                    <Badge className="bg-green-500 text-white">
                      {plan.discount} OFF
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">
                      ₹{plan.price.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      /{plan.duration}
                    </span>
                  </div>
                  {plan.discount && (
                    <p className="text-sm text-green-600 font-medium mt-2">
                      Save {plan.discount}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">+ GST</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Order Summary */}
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span>
                      {selectedPlanDetails?.name} Plan (
                      {selectedPlanDetails?.duration})
                    </span>
                    <span>₹{selectedPlanDetails?.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>GST (18%)</span>
                    <span>
                      ₹
                      {selectedPlanDetails
                        ? Math.round(
                            selectedPlanDetails.price * 0.18
                          ).toLocaleString()
                        : 0}
                    </span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Amount</span>
                    <span>
                      ₹
                      {selectedPlanDetails
                        ? Math.round(
                            selectedPlanDetails.price * 1.18
                          ).toLocaleString()
                        : 0}
                    </span>
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                      className={`cursor-pointer transition-all ${
                        paymentMethod === "card" ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <CardContent className="flex items-center justify-center p-4">
                        <div className="text-center">
                          <CreditCard className="h-8 w-8 mx-auto mb-2" />
                          <span className="text-sm font-medium">
                            Credit/Debit Card
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all ${
                        paymentMethod === "upi" ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setPaymentMethod("upi")}
                    >
                      <CardContent className="flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="h-8 w-8 mx-auto mb-2 bg-primary rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              UPI
                            </span>
                          </div>
                          <span className="text-sm font-medium">
                            UPI Payment
                          </span>
                        </div>
                      </CardContent>
                    </Card>

                    <Card
                      className={`cursor-pointer transition-all ${
                        paymentMethod === "netbanking"
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => setPaymentMethod("netbanking")}
                    >
                      <CardContent className="flex items-center justify-center p-4">
                        <div className="text-center">
                          <Shield className="h-8 w-8 mx-auto mb-2" />
                          <span className="text-sm font-medium">
                            Net Banking
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Payment Form Fields */}
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardholderName">Cardholder Name *</Label>
                      <Input
                        id="cardholderName"
                        placeholder="Enter cardholder name"
                        value={formData.cardholderName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardholderName: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardNumber: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expiryDate: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) =>
                            setFormData({ ...formData, cvv: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-2">
                    <Label htmlFor="upiId">UPI ID *</Label>
                    <Input
                      id="upiId"
                      placeholder="yourname@upi"
                      value={formData.upiId}
                      onChange={(e) =>
                        setFormData({ ...formData, upiId: e.target.value })
                      }
                      required
                    />
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="space-y-2">
                    <Label htmlFor="bank">Select Bank *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sbi">State Bank of India</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank</SelectItem>
                        <SelectItem value="icici">ICICI Bank</SelectItem>
                        <SelectItem value="axis">Axis Bank</SelectItem>
                        <SelectItem value="kotak">
                          Kotak Mahindra Bank
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg">
                  Pay ₹
                  {selectedPlanDetails
                    ? Math.round(
                        selectedPlanDetails.price * 1.18
                      ).toLocaleString()
                    : 0}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By proceeding, you agree to our Terms of Service and Privacy
                  Policy. Your payment is secured with 256-bit SSL encryption.
                </p>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
