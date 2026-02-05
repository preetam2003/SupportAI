import React from 'react';
import { getSession } from '@/lib/getSession';
import DashbordClint from '@/app/components/DashbordClint';
import { redirect } from "next/navigation";

async function DashboardPage() {
  const session = await getSession();

  if (!session || !session.user) {
    redirect("/api/auth/login");
  }

  return (
    <div>
      <DashbordClint ownerId={session.user?.id ?? ""} />
    </div>
  );
}

export default DashboardPage;
