<?php

declare(strict_types=1);

namespace Flat3\Lodata\Helper\DBAL;

use Doctrine\DBAL\Schema\Table;
use Exception;
use Flat3\Lodata\Helper\DBAL;
use Flat3\Lodata\Helper\DBAL\DBAL3\MySQLDriver;
use Flat3\Lodata\Helper\DBAL\DBAL3\PostgreSQLDriver;
use Flat3\Lodata\Helper\DBAL\DBAL3\SQLiteDriver;
use Flat3\Lodata\Helper\DBAL\DBAL3\SQLServerDriver;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Database\MySqlConnection;
use Illuminate\Database\PostgresConnection;
use Illuminate\Database\SQLiteConnection;
use Illuminate\Database\SqlServerConnection;

class DBAL3 extends DBAL
{
    public function listTableDetails(string $table): Table
    {
        $manager = $this->connection->createSchemaManager();

        if ($this->connection->getDriver() instanceof PostgreSQLDriver) {
            $table = $this->quoteSingleIdentifier($table);
        }

        return $manager->listTableDetails($table);
    }

    protected function getDoctrineDriver(ConnectionInterface $connection)
    {
        switch (true) {
            case $connection instanceof PostgresConnection:
                return new PostgreSQLDriver;

            case $connection instanceof MySqlConnection:
                return new MySQLDriver;

            case $connection instanceof SQLiteConnection:
                return new SQLiteDriver;

            case $connection instanceof SqlServerConnection:
                return new SQLServerDriver;
        }

        throw new Exception('Connection not known');
    }
}