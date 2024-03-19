import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import '../../global.css';
import NavBar from '../components/NavBar';
import ResumeCardHome from '../components/ResumeCardHome';
import RecentTransactions from '../components/RecentTransactions';
import QuickAccess from '../components/QuickAccess';

export default function Home() {
  return (
    <SafeAreaView className="flex gap-4 mx-3">
      <StatusBar barStyle="dark-content" />
      <NavBar />
      <ResumeCardHome />
      <QuickAccess />
      <RecentTransactions />
    </SafeAreaView>
  );
}
