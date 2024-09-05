import { FC } from 'react';
import { Navbar } from '../components/Navbar';

const CompareAccounts: FC = () => {
  return (
    <div className=" mx-auto ">
      <Navbar />
      <div className="pt-20 ">
        <div className=" max-w-sirina mx-auto ">

        
    <div className="p-4 lg:p-8 mb-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Compare Account Plans</h1>

      {/* Tabela poređenja */}
      <div className="overflow-x-auto pt-5  border-b-[1px] border-gray-300">
      <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic Account</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Silver Account</th>
                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider plavigradijent">Gold Account</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Account</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VIP Account</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Investment Amount */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Investment Amount</td>
                    <td className="px-6 py-3 text-sm">$200 - $9,999</td>
                    <td className="px-6 py-3 text-sm">$10,000 - $24,999</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">$25,000 - $49,999</td>
                    <td className="px-6 py-3 text-sm">$100,000+</td>
                    <td className="px-6 py-3 text-sm">$250,000+</td>
                  </tr>

                  {/* Leverage */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Leverage</td>
                    <td className="px-6 py-3 text-sm">1:30</td>
                    <td className="px-6 py-3 text-sm">1:100</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">1:200</td>
                    <td className="px-6 py-3 text-sm">1:300</td>
                    <td className="px-6 py-3 text-sm">1:400</td>
                  </tr>

                  {/* Swaps */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Swaps</td>
                    <td className="px-6 py-3 text-sm">Regular</td>
                    <td className="px-6 py-3 text-sm">25% lower</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">50% lower</td>
                    <td className="px-6 py-3 text-sm">75% lower</td>
                    <td className="px-6 py-3 text-sm">Swap-free</td>
                  </tr>

                  {/* Spreads */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Spreads</td>
                    <td className="px-6 py-3 text-sm">Regular</td>
                    <td className="px-6 py-3 text-sm">Regular</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">As low as 1.9</td>
                    <td className="px-6 py-3 text-sm">As low as 1.9</td>
                    <td className="px-6 py-3 text-sm">As low as 1.5</td>
                  </tr>

                  {/* Education */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Education</td>
                    <td className="px-6 py-3 text-sm">Basic Education</td>
                    <td className="px-6 py-3 text-sm">3 Advanced Lessons</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">Advanced Education</td>
                    <td className="px-6 py-3 text-sm">Advanced Education</td>
                    <td className="px-6 py-3 text-sm">Advanced Education</td>
                  </tr>

                  {/* Market Reviews */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Market Reviews</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm">Daily Market Reviews</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">Daily Market Reviews</td>
                    <td className="px-6 py-3 text-sm">Daily Market Reviews</td>
                    <td className="px-6 py-3 text-sm">Daily Market Reviews</td>
                  </tr>

                  {/* Risk-free Trades */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Risk-free Trades</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">1 Risk-free trade</td>
                    <td className="px-6 py-3 text-sm">3 Risk-free trades</td>
                    <td className="px-6 py-3 text-sm">3 Risk-free trades</td>
                  </tr>

                  {/* Dedicated Market Analyst */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Dedicated Market Analyst</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">Dedicated Market Analyst</td>
                    <td className="px-6 py-3 text-sm">Market Analyst</td>
                    <td className="px-6 py-3 text-sm">Market Analyst</td>
                  </tr>

                  {/* Webinars */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Webinars</td>
                    <td className="px-6 py-3 text-sm">Live Webinars with Senior Trading Strategist</td>
                    <td className="px-6 py-3 text-sm">Live Webinars with Senior Trading Strategist</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">Live Webinars with Senior Trading Strategist</td>
                    <td className="px-6 py-3 text-sm">Live Webinars with Senior Trading Strategist</td>
                    <td className="px-6 py-3 text-sm">Live Webinars with Senior Trading Strategist</td>
                  </tr>

                  {/* Withdrawals */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Withdrawals</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm">1 Free Withdrawal Monthly</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">3 Free Withdrawals Monthly</td>
                    <td className="px-6 py-3 text-sm">Unlimited Free Withdrawals</td>
                    <td className="px-6 py-3 text-sm">Unlimited Free Withdrawals</td>
                  </tr>

                  {/* Special Offers */}
                  <tr>
                    <td className="px-6 py-3 text-sm font-semibold">Special Offers</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm">N/A</td>
                    <td className="px-6 py-3 text-sm plavigradijent font-semibold">N/A</td>
                    <td className="px-6 py-3 text-sm">Special offers</td>
                    <td className="px-6 py-3 text-sm">Special offers</td>
                  </tr>
                </tbody>
              </table>

      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CompareAccounts;